import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBvHhy4uVvsDlYMEi_KQ2tVQwsSqZByMIM",
    authDomain: "adoptapp-f8922.firebaseapp.com",
    projectId: "adoptapp-f8922",
    storageBucket: "adoptapp-f8922.appspot.com",
    messagingSenderId: "377624085087",
    appId: "1:377624085087:web:58179fa8fef39e551c51ea",
    measurementId: "G-PX5V10QEFQ",
};

// Inicializa Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializa Firebase Storage
export const storage = getStorage(firebaseApp);
