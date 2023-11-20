<template>
  <div>
    <h2>Carrito de Compras</h2>

    <div v-if="cart.length === 0">
      <p>El carrito está vacío</p>
    </div>

    <div v-else>
      
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
    
   
  },
  created() {
    
  },
};
</script>