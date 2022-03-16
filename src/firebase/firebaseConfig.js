import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCoNhOLJVufTqFjpYT39J4yhsKefBfCEOI',
	authDomain: 'concejo-gc.firebaseapp.com',
	projectId: 'concejo-gc',
	storageBucket: 'concejo-gc.appspot.com',
	messagingSenderId: '558064140393',
	appId: '1:558064140393:web:e8b56bb03daa354b70e2f8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
