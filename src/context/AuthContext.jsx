import React, { createContext, useState, useEffect, useContext } from 'react';
import { account, databases, APPWRITE_CONFIG } from '../lib/appwrite';
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
            // Fetch profile as well
            let profile = null;
            try {
                const profileList = await databases.listDocuments(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                    [Query.equal('userId', accountDetails.$id)]
                );
                if (profileList.documents.length > 0) {
                    profile = profileList.documents[0];
                }
            } catch (error) {
                console.error("Profile fetch error (might not exist yet):", error);
            }

            setCurrentUser({ ...accountDetails, profile });
        } catch (error) {
            setCurrentUser(null);
        } finally {
            setLoading(false);
        }
    };

    const parseAppwriteError = (error) => {
        console.error("Appwrite Error:", error);
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
            return "Invalid email or password. Please double-check your credentials.";
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
            // 1. Create Appwrite Account
            const newAccount = await account.create(ID.unique(), email, password, name);

            // 2. Login immediately to create session (needed to write to DB if permissions require auth)
            await account.createEmailPasswordSession(email, password);

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
                // Continue anyway, user is created
            }

            await checkUserStatus();
            return { success: true, message: 'Registration successful' };
        } catch (error) {
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    const login = async (email, password) => {
        try {
            await account.createEmailPasswordSession(email, password);
            await checkUserStatus();
            return { success: true, message: 'Login successful' };
        } catch (error) {
            // If session already exists, just refresh user status and consider it a success
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

    const updateProfile = async (updates) => {
        try {
            // Update name in Account if provided
            if (updates.name) {
                await account.updateName(updates.name);
            }

            // Update profile document
            if (currentUser.profile && (updates.phone || updates.address)) {
                const profileUpdates = {};
                if (updates.phone) profileUpdates.phone = updates.phone;
                if (updates.address) profileUpdates.address = updates.address;

                await databases.updateDocument(
                    APPWRITE_CONFIG.DATABASE_ID,
                    APPWRITE_CONFIG.COLLECTION_ID_PROFILES,
                    currentUser.profile.$id,
                    profileUpdates
                );
            }

            await checkUserStatus(); // Refresh local state
            return { success: true, message: "Profile updated successfully" };
        } catch (error) {
            console.error("Profile update error:", error);
            return { success: false, message: parseAppwriteError(error) };
        }
    };

    // Legacy support for orders (local simulation for now as requested)
    // We can't really "addOrder" to the immutable profile easily without parsing JSON.
    // For now, we will just use local state behavior for the UI if needed, 
    // or simply acknowledge the order locally.
    const addOrder = (order) => {
        if (!currentUser) return { success: false, message: 'User not logged in' };

        try {
            const storageKey = `orders_${currentUser.$id}`;
            const storedOrders = localStorage.getItem(storageKey);
            const currentOrders = storedOrders ? JSON.parse(storedOrders) : [];
            const newOrders = [...currentOrders, order];

            localStorage.setItem(storageKey, JSON.stringify(newOrders));

            // Notify listeners or just return success
            // In a more complex app, we might want to update a state that ProfilePage subscribes to,
            // but for now, ProfilePage will fetch on mount.

            return { success: true, message: 'Order saved locally' };
        } catch (e) {
            console.error("Order save error", e);
            return { success: false, message: 'Failed to save order' };
        }
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, register, logout, updateProfile, addOrder, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
