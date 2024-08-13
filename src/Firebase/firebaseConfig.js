import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyC9JJUrY3Sae35yUyPbg7_fUKndR7QmzYI",
    authDomain: "education-project-312df.firebaseapp.com",
    databaseURL: "https://education-project-312df-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "education-project-312df",
    storageBucket: "education-project-312df.appspot.com",
    messagingSenderId: "804827088664",
    appId: "1:804827088664:web:b0068861045621ddd3006d",
    measurementId: "G-C9M9FL3L4Q"
};
// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo các dịch vụ Firebase
export const auth = getAuth(app);
export const db = getFirestore(app);