<template>
  <div>
    <h2>Carrito de Compras</h2>

    <div v-if="favorites.length === 0">
      <p>El carrito está vacío</p>
    </div>

    <div v-else>
       <ul>
        <li v-for="(character, index) in favorites" :key="character.id">
          {{ character.name }} 
          <button class="btn btn-borrar" @click="removeFromFavorites(index)">Eliminar</button>
        </li>
      </ul>
      </div>
    
  </div>
</template>
<script>
export default {
  name: "FavoritesComponent",
  data() {
    return {
      favorites: [],
    };
  },
  methods: {
    removeFromFavorites(index) {
      // Elimina el producto del carrito en el índice especificado
      this.favorites.splice(index, 1);
      // Actualiza el carrito en el localStorage
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
   
  },
  created() {
    // Escucha el evento 'add-to-favorites' emitido por ProductsComponent
    this.$root.$on("add-to-favorites", (character) => {
      // Agrega el producto al carrito
      this.favorites.push(character);
      // Puedes guardar el carrito en localStorage aquí si lo deseas
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    });

    // Carga el carrito desde localStorage al iniciar
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  },
};
</script>