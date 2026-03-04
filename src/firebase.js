import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDGZp26Oy2COvb8xEJq1VkzxhSVcDBgSVY",
    authDomain: "portfolio-gowtham-4ff79.firebaseapp.com",
    databaseURL: "https://portfolio-gowtham-4ff79-default-rtdb.firebaseio.com",
    projectId: "portfolio-gowtham-4ff79",
    storageBucket: "portfolio-gowtham-4ff79.firebasestorage.app",
    messagingSenderId: "30642896578",
    appId: "1:30642896578:web:0f1383a2c3f00a6e70455b",
    measurementId: "G-5BR01QB1G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the database for use in your pages
export const db = getDatabase(app);
