<template>
  <div>
    <h2>Personajes Favoritos</h2>

    <div v-if="favorites.length === 0">
      <p>El carrito está vacío</p>
    </div>

    <div v-else>
       <ul >
        <li v-for="(character, index) in favorites" :key="character.id" class="mt-3 ">
          <div class="favorite-cont d-flex justify-content-center">
          <img :src="character.image" class="card-img-top img-modal img-fav" :alt="character.name">
          <ol>
          <h3>
          <li>{{ character.name }}</li>
          </h3>
          <li>Estado: {{ character.status }} </li>
          <li>Género: {{ character.gender }} </li>
          </ol>
          </div>
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
   isFavorite(character) {
    return this.favorites.some(favorite => favorite.id === character.id);
  },
  },
  created() {

    

    // Escucha el evento 'add-to-favorites' emitido por ProductsComponent

    this.$root.$on("add-to-favorites", (character) => {

      if(!this.isFavorite(character)){
        // Agrega el producto al carrito
      this.favorites.push(character);
      // guarda el carrito en localStorage aquí si lo deseas
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
      
    });

    // Carga el carrito desde localStorage al iniciar
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  },
};
</script>