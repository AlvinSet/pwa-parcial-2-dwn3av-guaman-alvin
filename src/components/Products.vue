<template>
  <div>
    <h2>Listado de Productos</h2>



    <div class="d-flex flex-wrap container justify-content-between mt-2">
            <div class="card col-4 mt-3 mb-3" style="width: 18rem;" v-for="product in products" :key="product.id">
                <img  :src="product.images[0]" class="card-img-top" >
                <div class="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 class="card-title">{{product.title}}</h2>
                    <a @click="showDetails(product)" class="btn  boton-color" data-bs-toggle="modal"
                        data-bs-target="#productModal">Ver Detalles </a>
                </div>
            </div>
   </div>

  <div class="modal" id="productModal" tabindex="-1">
            <div class="modal-dialog modal-sm">
                <div class="modal-content ">
                    <div class="modal-header ">
                        <h3 class="modal-title text-center">{{ productDetails.title }}</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                        <img :src="productDetails.images" class="card-img-top img-modal" :alt="productDetails.title">
                      <p><ul>
                    <li>{{productDetails.description}}</li>
                  <li> Precio: $ {{productDetails.price}}</li>
                    </ul></p>

                    </div>
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
    
    async showDetails(product)
        {

                try {
                    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${product.id}`);
                    const data = await response.json();
                    this.productDetails = data;
          
                } catch (error) {
                    console.error('Error fetching product details:', error);
                }  
            

        },

  },
  mounted() {
    
     if(this.products.length === 0){
            fetch ('https://api.escuelajs.co/api/v1/products?offset=20&limit=30')
            .then (response => response.json())
            .then(data => {this.products = data;
            })
            
        }

  },
};
</script>