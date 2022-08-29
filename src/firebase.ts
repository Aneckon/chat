// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6dDuLUyXbNQYz0yetcfcunB-Ann6-lQo",
  authDomain: "test-chat-2f2a5.firebaseapp.com",
  projectId: "test-chat-2f2a5",
  storageBucket: "test-chat-2f2a5.appspot.com",
  messagingSenderId: "654809344475",
  appId: "1:654809344475:web:8525bab641a925a6f61ffe"
};

// Initialize Firebase
export const firestore  = initializeApp(firebaseConfig);

