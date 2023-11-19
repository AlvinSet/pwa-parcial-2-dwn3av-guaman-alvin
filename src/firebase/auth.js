
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
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


