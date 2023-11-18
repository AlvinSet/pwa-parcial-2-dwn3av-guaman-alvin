<template>
  <div>
    <header>
      <h1>Bienvenido a mi Biblioteca Virtual</h1>
    </header>

    
    
      <Login />
    

    <footer>
      <p>© 2023 Biblioteca Virtual</p>
    </footer>
  </div>
</template>

<script>
// Importa el componente Login.vue
import Login from '@/components/Login.vue';

export default {
  components: {
    Login,
  },
};
</script>

<style scoped>

</style>