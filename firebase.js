
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB_HCKHChNOIpZ6V8QjT5SeIyOxXvJ5Pfw",
  authDomain: "inclusive-steam-lt.firebaseapp.com",
  projectId: "inclusive-steam-lt",
  storageBucket: "inclusive-steam-lt.firebasestorage.app",
  messagingSenderId: "427490224323",
  appId: "1:427490224323:web:466e2a1fce9269012fda76"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
