import { Client, Account, Databases, Storage, Avatars } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

export const APPWRITE_CONFIG = {
    DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    COLLECTION_ID_PROFILES: import.meta.env.VITE_APPWRITE_COLLECTION_ID_PROFILES,
    COLLECTION_ID_MESSAGES: import.meta.env.VITE_APPWRITE_COLLECTION_ID_MESSAGES || 'messages',
    COLLECTION_ID_ORDERS: import.meta.env.VITE_APPWRITE_COLLECTION_ID_ORDERS || 'orders',
    BUCKET_ID: import.meta.env.VITE_APPWRITE_BUCKET_ID || 'avatars', // Default to 'avatars'
};
