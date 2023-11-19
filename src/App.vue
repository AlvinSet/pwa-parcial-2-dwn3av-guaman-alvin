<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button v-if="user" @click="logout">Logout</button>
    </nav>
    <router-view :user="user"/>
  </div>
</template>

<script>
import { observeAuthState, logout } from '@/firebase/auth.js';

export default {
  name: 'App',
  data() {
    return {
      user: null,
    };
  },

  created() {
    observeAuthState((user) => {
      this.user = user;
    });
  },

  methods: {
    async logout() {
      try {
        await logout();
        // Redirige a la página de inicio después de cerrar sesión
        console.log('Se cerró la sesion correctamente');
        this.$router.push({ name: 'login' });
      } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
