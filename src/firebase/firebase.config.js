// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzhUIKnE4Mc7ymgEdTTSEo397sgPF4298",
    authDomain: "react-dergon-news.firebaseapp.com",
    projectId: "react-dergon-news",
    storageBucket: "react-dergon-news.firebasestorage.app",
    messagingSenderId: "392826425240",
    appId: "1:392826425240:web:86d8220294109ad27ba5ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;