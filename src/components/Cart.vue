<template>
  <div>
    <h2>Carrito de Compras</h2>

    <div v-if="cart.length === 0">
      <p>El carrito está vacío</p>
    </div>

    <div v-else>
       <ul>
        <li v-for="(product, index) in cart" :key="product.id">
          {{ product.title }} - ${{ product.price }}
          <button @click="removeFromCart(index)">Eliminar</button>
        </li>
      </ul>
      </div>
    
  </div>
</template>
<script>
export default {
  name: "CartComponent",
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    removeFromCart(index) {
      // Elimina el producto del carrito en el índice especificado
      this.cart.splice(index, 1);
      // Actualiza el carrito en el localStorage
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
   
  },
  created() {
    // Escucha el evento 'add-to-cart' emitido por ProductsComponent
    this.$root.$on("add-to-cart", (product) => {
      // Agrega el producto al carrito
      this.cart.push(product);
      // Puedes guardar el carrito en localStorage aquí si lo deseas
      localStorage.setItem("cart", JSON.stringify(this.cart));
    });

    // Carga el carrito desde localStorage al iniciar
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  },
};
</script>