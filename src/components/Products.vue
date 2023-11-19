<template>
  <div>
    <h2>Listado de Productos</h2>
    <div class="d-flex flex-wrap container justify-content-between mt-2">
            <div class="card col-4 mt-3 mb-3" style="width: 18rem;" v-for="product in products" :key="product.id">
                <img  class="card-img-top" >
                <div class="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 class="card-title">{{product.title}}</h2>
                    <a @click="showDetails(character)" class="btn  boton-color" data-bs-toggle="modal"
                        data-bs-target="#characterModal">Ver Detalles </a>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
  name: "ProductsComponent",
  data() {
    return {
      products: [],
      productDetails: [],

    };
  },
  methods: {
    
  },
  mounted() {
    
     if(this.products.length === 0){
            fetch ('https://api.escuelajs.co/api/v1/products?offset=20&limit=40')
            .then (response => response.json())
            .then(data => {this.products = data;
            })
            .then(() => console.log(this.characters))
        }

  },
};
</script>