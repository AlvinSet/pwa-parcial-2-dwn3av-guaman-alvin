
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth';
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


export const observeAuthState = (callback) => {
    return onAuthStateChanged(auth, (user) => {
        callback(user);
    });
};

export const logout = async () => {
    try {
        await signOut(auth);
        // Otras acciones después del cierre de sesión si es necesario
        
        
    } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
        // Manejar el error de cierre de sesión aquí
    }
};