<template>
  <main class="form-signin w-100 m-auto">
    <form  @submit.prevent="login">
        <h1 class="h3 mb-3 fw-normal">Iniciar Sesión</h1>

        <div class="form-floating">
            <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="nombre@ejemplo.com">
            <label for="floatingInput">Dirección de email</label>
        </div>
        <div class="form-floating">
            <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
            <label for="floatingPassword">Contraseña</label>
        </div>

        <div class="form-check text-start my-3">
            <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
                Recordar
            </label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit" @click="login">Iniciar sesión</button>
    </form>
</main>
</template>
<script>
import { loginWithEmailAndPassword } from '@/firebase/auth.js';

export default {
  name: "LoginComponent",
    data() {
    return {
      email: '',
      password: '',
    };
  },

  methods: {
    login() {
      console.log(this.email , this.password);
      loginWithEmailAndPassword(this.email, this.password)
        .then(response => {
          console.log('Inicio de sesión exitoso', response);
          // Realiza otras acciones después del inicio de sesión si es necesario
        })
        .catch(error => {
          console.error('Error al iniciar sesión:', error.message);
          // Maneja el error de autenticación aquí
        });
    },
  },
};
</script>
<style scoped>
/* Estilos específicos para este componente si los hay */
</style>
