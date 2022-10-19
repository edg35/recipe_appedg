import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCIeNAkWk16uRgg4GbQ_YKv7Z5Tnlq4A-Y",
    authDomain: "recipe-app-3ac7e.firebaseapp.com",
    projectId: "recipe-app-3ac7e",
    storageBucket: "recipe-app-3ac7e.appspot.com",
    messagingSenderId: "700776832243",
    appId: "1:700776832243:web:41d1cda7c64af8ea902b86",
    measurementId: "G-3BSPTYPMYW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);