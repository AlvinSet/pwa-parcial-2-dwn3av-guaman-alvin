<template>
  <div id="app">
  <header>
      <h1>Rick and Morty App</h1>
    </header>
    <nav v-if="user">
      <router-link to="/">Home</router-link> |
      <router-link to="/favorites">Favoritos</router-link> |
      <button class="logout-button"  @click="logout">Logout</button>
    </nav>
    <router-view :user="user"/>
    <div class="row sticky" >
        <button @click="installApp" id="install" type="button" class="btn boton-install"  v-if="instalacionPendiente">Instalar aplicación</button>
    </div>
  </div>
  
</template>

<script>
import { observeAuthState, logout } from '@/firebase/auth.js';

export default {
  name: 'App',
  data() {
    return {
      instalacionPendiente: true,
      eventoDeInstalacion: null,
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
        
      } catch (error) {
        console.error('Error al cerrar sesión:', error.message);
      }
    },
    installApp(){
      if(this.eventoDeInstalacion !=null){
        this.eventoDeInstalacion.prompt()
          .then(({outcome}) => {
            if(outcome === "accepted"){
              this.instalacionPendiente = false;
            } else {console.log("no se instaló");}
          });
      }else {console.log("no se puede instalar");}

    },
  },
  mounted(){
    window.addEventListener("beforeinstallprompt", (event) => {
                this.eventoDeInstalacion = event;
                this.instalacionPendiente = true;
            });

    if(this.eventoDeInstalacion == null){
      this.instalacionPendiente = false;
    }
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
button.logout-button{
  background: none;
  border: none;
  padding: 0;
  margin: 0;
}
</style>
