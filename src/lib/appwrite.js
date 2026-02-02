import { Client, Account, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);

export const APPWRITE_CONFIG = {
    DATABASE_ID: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    COLLECTION_ID_PROFILES: import.meta.env.VITE_APPWRITE_COLLECTION_ID_PROFILES,
};
