import { initializeApp } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

export const settings = {
  project_id: 'wol-planner-7e216',
};

const firebaseConfig = {
  apiKey: process.env.NX_API_KEY,
  authDomain: process.env.NX_AUTH_DOMAIN,
  databaseURL: process.env.NX_DATABASE_URL,
  projectId: "wol-planner-7e216",
  storageBucket: process.env.NX_STORAGE_BUCKET,
  messagingSenderId: process.env.NX_MESSAGING_SENDER_ID,
  appId: "1:1092456040603:web:83a5c56785f71e0ff81e3e",
  measurementId: process.env.NX_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()