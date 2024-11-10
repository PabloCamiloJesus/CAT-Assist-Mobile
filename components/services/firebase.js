// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, GoogleAuthProvider, getReactNativePersistence } from "firebase/auth";

import {ReactNativeAsyncStorage} from "@react-native-async-storage/async-storage"

// import {process.env.EXPO_PUBLIC_FIREBASE_APIKEY, process.env.EXPO_PUBLIC_FIREBASE_AUTHDOMAIN, process.env.EXPO_PUBLIC_FIREBASE_PROJECTID, process.env.EXPO_PUBLIC_FIREBASE_STORAGEBUCKET, process.env.EXPO_PUBLIC_FIREBASE_MESSAGINGSENDERID, process.env.EXPO_PUBLIC_FIREBASE_APPID} from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: process.env.EXPO_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.EXPO_PUBLIC_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export const db = getFirestore(app);

export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();
