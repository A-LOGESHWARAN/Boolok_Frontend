// lib/firebase.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyA8uP7yAMkoUWhL77Se1Pw3WEot_Zxa828",
  authDomain: "chat-app-73fe6.firebaseapp.com",
  projectId: "chat-app-73fe6",
  storageBucket: "chat-app-73fe6.firebasestorage.app",
  messagingSenderId: "137426373032",
  appId: "1:137426373032:web:b3aad98c1370910510f59d",
  measurementId: "G-DDBWNZSD0K"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

