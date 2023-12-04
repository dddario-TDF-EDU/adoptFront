import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA5rTVUKKtovhgfIvQa9lLRVZRNcdsYdAQ",
    authDomain: "adoptapp-aed60.firebaseapp.com",
    projectId: "adoptapp-aed60",
    storageBucket: "adoptapp-aed60.appspot.com",
    messagingSenderId: "271490375697",
    appId: "1:271490375697:web:7ddecc5de2e10ecfc691b0"
  }; 

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializa Firebase Storage
export const storage = getStorage(firebaseApp);
