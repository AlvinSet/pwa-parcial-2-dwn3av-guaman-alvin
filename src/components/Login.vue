<template>
  <main class="form-signin w-100 m-auto">
    <form  @submit.prevent="login">
        <h2 class="h3 mb-3 fw-normal">Iniciar Sesión</h2>

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
        <button class="btn boton-color w-100 py-2" type="submit">Iniciar sesión</button>
        <!-- Mostrar el mensaje de error si existe -->
      <div v-if="error" class="alert alert-danger mt-3" role="alert">
        {{ error }}
      </div>
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
      error: null,
    };
  },

  methods: {
    async login() {
      try {
        const response = await loginWithEmailAndPassword(this.email, this.password);
        console.log('Inicio de sesión exitoso', response.user);

        // Redirige a la página deseada después de iniciar sesión
        this.$router.push({ name: 'home' });
      } catch (error) {
        // Actualiza el mensaje de error
        this.error = 'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
      }

    },
  },
};
</script>
<style scoped>
/* Estilos específicos para este componente si los hay */
</style>
