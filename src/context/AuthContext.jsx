import React, { createContext, useState, useEffect, useContext } from 'react';
import { account, databases, storage, avatars, APPWRITE_CONFIG } from '../lib/appwrite';
import { ID, Query } from 'appwrite';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUserStatus();
    }, []);

    const checkUserStatus = async () => {
        try {
            const accountDetails = await account.get();
            let profile = null;
            let avatarUrl = null;

            try {
                const profileList = await databases.listDocuments(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                    [Query.equal('userId', accountDetails.$id)]
                );

                if (profileList.documents.length > 0) {
                    profile = profileList.documents[0];

                    if (profile.avatarId) {
                        try {
                            const result = storage.getFilePreview(
                                APPWRITE_CONFIG.BUCKET_ID,
                                profile.avatarId
                            );
                            // Correctly append timestamp based on existing params
                            const baseUrl = result.href || result.toString();
                            avatarUrl = baseUrl.includes('?')
                                ? `${baseUrl}&t=${Date.now()}`
                                : `${baseUrl}?t=${Date.now()}`;
                            console.log("Debug: Final Avatar URL:", avatarUrl);
                        } catch (avatarErr) {
                            console.error("Debug: Preview Error:", avatarErr);
                        }
                    }
                }
            } catch (error) {
                console.error("Debug: Profile/Avatar fetch error:", error);
            }

            // Fallback to initials if no custom avatar
            if (!avatarUrl && accountDetails.name) {
                try {
                    const initialResult = avatars.getInitials(accountDetails.name);
                    avatarUrl = initialResult.href || initialResult.toString();
                } catch (initErr) {
                    console.error("Debug: Initials Error:", initErr);
                }
            }

            setCurrentUser({ ...accountDetails, profile, avatarUrl });
        } catch (error) {
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    };

    const parseAppwriteError = (error) => {
        console.error("Appwrite Full Error Object:", error);

        if (error.message === "Failed to fetch") {
            return "Connection failed. Please check your internet or ensure this domain is added to Appwrite Platforms.";
        }
        if (error.code === 429) {
            return "Too many requests. Please try again later.";
        }
        if (error.code === 409) {
            return "Account with this email already exists.";
        }
        if (error.type === 'user_session_already_active') {
            return "You are already logged in.";
        }
        if (error.code === 401) {
            // Check if it's a specific type of 401
            if (error.type === 'user_invalid_credentials') {
                return "Invalid email or password. Please double-check your credentials.";
            }
            return error.message || "Invalid email or password.";
        }
        if (error.type === 'user_invalid_token') {
            return "Session expired. Please login again.";
        }
        if (error.type === 'password_recently_used') {
            return "The password you entered has been used recently.";
        }
        if (error.type === 'password_personal_data') {
            return "Password contains personal data and is too weak.";
        }
        return error.message || `An unexpected error occurred (${error.code}).`;
    };

    const register = async (name, email, phone, password) => {
        try {
            const cleanedEmail = email.trim();
            // 1. Create Appwrite Account
            const newAccount = await account.create(ID.unique(), cleanedEmail, password, name);

            // 2. Login immediately to create session
            await account.createEmailPasswordSession(cleanedEmail, password);

            // 3. Create Profile Document
            try {
                await databases.createDocument(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                    ID.unique(),
                    {
                        userId: newAccount.$id,
                        phone: phone,
                        address: '',
                        orders: '[]'
                    }
                );
            } catch (dbError) {
                console.error("Failed to create profile document:", dbError);
            }

            await checkUserStatus();
            return { success: true, message: 'Registration successful' };
        } catch (error) {
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    const login = async (email, password) => {
        try {
            const cleanedEmail = email.trim();
            await account.createEmailPasswordSession(cleanedEmail, password);
            await checkUserStatus();
            return { success: true, message: 'Login successful' };
        } catch (error) {
            if (error.type === 'user_session_already_active') {
                await checkUserStatus();
                return { success: true, message: 'Login successful' };
            }
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession('current');
            setCurrentUser(null);
            return { success: true, message: 'Logout successful' };
        } catch (error) {
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    const uploadProfilePicture = async (file) => {
        if (!currentUser) return { success: false, message: "User not logged in" };

        console.log("Starting upload to bucket:", APPWRITE_CONFIG.BUCKET_ID);
        try {
            // 1. Upload file to Storage
            const uploadedFile = await storage.createFile(
                APPWRITE_CONFIG.BUCKET_ID,
                ID.unique(),
                file
            );
            console.log("File uploaded successfully, ID:", uploadedFile.$id);

            // 2. Update profile document with avatarId
            try {
                if (currentUser.profile) {
                    await databases.updateDocument(
                        APPWRITE_CONFIG.DATABASE_ID,
                        APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                        currentUser.profile.$id,
                        { avatarId: uploadedFile.$id }
                    );
                } else {
                    await databases.createDocument(
                        APPWRITE_CONFIG.DATABASE_ID,
                        APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                        ID.unique(),
                        {
                            userId: currentUser.$id,
                            phone: '',
                            address: '',
                            avatarId: uploadedFile.$id
                        }
                    );
                }
            } catch (dbError) {
                console.error("Database Update Failed. Did you add the 'avatarId' attribute in Appwrite?", dbError);
                return { success: false, message: "Database update failed. Please ensure the 'avatarId' attribute exists in your Appwrite Profiles collection." };
            }

            await checkUserStatus(); // Refresh
            return { success: true, message: "Profile picture updated!" };
        } catch (error) {
            console.error("Upload error details:", error);
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    const updateProfile = async (updates) => {
        try {
            if (updates.name) {
                await account.updateName(updates.name);
            }

            const profileData = {
                phone: updates.phone || '',
                address: updates.address || ''
            };

            if (currentUser.profile) {
                // Update existing
                await databases.updateDocument(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                    currentUser.profile.$id,
                    profileData
                );
            } else {
                // Create new if missing
                await databases.createDocument(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                    ID.unique(),
                    {
                        userId: currentUser.$id,
                        ...profileData,
                        orders: '[]'
                    }
                );
            }

            await checkUserStatus();
            return { success: true, message: "Profile updated successfully" };
        } catch (error) {
            console.error("Profile update error:", error);
            let errorMessage = parseAppwriteError(error);
            if (error.code === 404) {
                errorMessage = "Database update failed. Please ensure the 'profiles' collection exists and you have proper permissions.";
            } else if (error.message && error.message.includes("Invalid attribute")) {
                errorMessage = "Update failed: Some attributes (like 'address' or 'phone') are missing in your Appwrite 'profiles' collection. Please add them as Type: String.";
            }
            return { success: false, message: errorMessage };
        }
    };

    const addOrder = async (order) => {
        if (!currentUser) return { success: false, message: 'User not logged in' };
        try {
            await databases.createDocument(
                APPWRITE_CONFIG.DATABASE_ID,
                APPWRITE_CONFIG.COLLECTION_ID_ORDERS,
                ID.unique(),
                {
                    userId: currentUser.$id,
                    items: JSON.stringify(order.items),
                    total: parseFloat(order.total),
                    status: order.status || 'Paid',
                    orderDate: new Date().toISOString(),
                    paymentMethod: order.method || 'Cash'
                }
            );
            return { success: true, message: 'Order placed successfully' };
        } catch (e) {
            return { success: false, message: parseAppwriteError(e) };
        }
    };

    const getUserOrders = async () => {
        if (!currentUser) return [];
        try {
            const response = await databases.listDocuments(
                APPWRITE_CONFIG.DATABASE_ID,
                APPWRITE_CONFIG.COLLECTION_ID_ORDERS,
                [
                    Query.equal('userId', currentUser.$id),
                    Query.orderDesc('orderDate')
                ]
            );
            return response.documents.map(doc => ({
                id: doc.$id,
                ...doc,
                items: JSON.parse(doc.items),
                date: doc.orderDate
            }));
        } catch (error) {
            return [];
        }
    };

    const deleteOrder = async (orderId) => {
        try {
            await databases.deleteDocument(
                APPWRITE_CONFIG.DATABASE_ID,
                APPWRITE_CONFIG.COLLECTION_ID_ORDERS,
                orderId
            );
            return { success: true };
        } catch (error) {
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    return (
        <AuthContext.Provider value={{
            currentUser,
            login,
            register,
            logout,
            updateProfile,
            uploadProfilePicture,
            addOrder,
            getUserOrders,
            deleteOrder,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};
