import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyD5YQufHPYpOI82YrQIrJHYQrqckqb0zpk",
	authDomain: "cd-cabrera.firebaseapp.com",
	projectId: "cd-cabrera",
	storageBucket: "cd-cabrera.appspot.com",
	messagingSenderId: "534251656453",
	appId: "1:534251656453:web:7b890d6e2f1f73b829936c",
	measurementId: "G-KKCWDWBW7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
