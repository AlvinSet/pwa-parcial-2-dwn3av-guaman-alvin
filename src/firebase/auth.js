// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// import { firebaseConfig } from './config.js';



// // Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
// const auth = getAuth(firebaseApp);

// src/authService.js
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './config';

const auth = getAuth(firebaseApp);

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log('Inicio de sesión exitoso', response);
    // Realizar acciones después del inicio de sesión exitoso
    return response;
  } catch (error) {
    console.error('Error al iniciar sesión', error.message);
  }
};