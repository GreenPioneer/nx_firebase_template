import { initializeApp } from "@firebase/app";
import { getStorage } from "@firebase/storage";

export const settings = {
  project_id: 'wol-planner-7e216',
};

const firebaseConfig = {
  authDomain: `${settings.project_id}.firebaseapp.com`,
  projectId: settings.project_id,
  databaseURL: `https://${settings.project_id}-default-rtdb.firebaseio.com`,
  storageBucket: `${settings.project_id}.appspot.com`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);