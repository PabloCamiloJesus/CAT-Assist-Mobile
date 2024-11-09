// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeAuth, GoogleAuthProvider, getReactNativePersistence } from "firebase/auth";

import {ReactNativeAsyncStorage} from "@react-native-async-storage/async-storage"

import {REACT_APP_FIREBASE_APIKEY, REACT_APP_FIREBASE_AUTHDOMAIN, REACT_APP_FIREBASE_PROJECTID, REACT_APP_FIREBASE_STORAGEBUCKET, REACT_APP_FIREBASE_MESSAGINGSENDERID, REACT_APP_FIREBASE_APPID} from "@env";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_APIKEY,
    authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECTID,
    storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
    appId: REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });

export const db = getFirestore(app);

export const storage = getStorage(app);

export const provider = new GoogleAuthProvider();
