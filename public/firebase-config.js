// public/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyBQxgGBsahjvgcQd3K9L5MJYoHKsL2m6-E",
  authDomain: "veritas-forensics-dac0e.firebaseapp.com",
  projectId: "veritas-forensics-dac0e",
  storageBucket: "veritas-forensics-dac0e.firebasestorage.app",
  messagingSenderId: "24950400843",
  appId: "1:24950400843:web:0a786ba3d14dd1bcc9aace",
  measurementId: "G-VL9N02WH46"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
