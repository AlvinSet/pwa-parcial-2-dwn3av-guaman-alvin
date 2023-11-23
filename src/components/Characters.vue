<template>
  <div>
    <h2>Listado de Personajes</h2>



    <div class="d-flex flex-wrap container justify-content-between mt-2">
            <div class="card col-4 mt-3 mb-3" style="width: 18rem;" v-for="character in characters" :key="character.id">
                <img :src="character.image" class="card-img-top" :alt="character.name">
                <div class="card-body d-flex flex-column align-items-center justify-content-center">
                    <h2 class="card-title">{{character.name}}</h2>
                    <a @click="showDetails(character)" class="btn  boton-color" data-bs-toggle="modal"
                        data-bs-target="#characterModal">Ver Detalles </a>
                    <a @click="addToFavorites(character)" class="btn  boton-color" 
                        >Agregar a tus Favoritos </a>
                </div>
            </div>
        </div>

  <div class="modal" id="characterModal" tabindex="-1">
            <div class="modal-dialog modal-md">
                <div class="modal-content ">
                    <div class="modal-header ">
                        <h3 class="modal-title text-center">{{ characterDetails.name }}</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex justify-content-around">
                        <img :src="characterDetails.image" class="card-img-top img-modal" :alt="characterDetails.name">
                        <ul class="d-flex flex-column justify-content-around">
                            <li>{{characterDetails.species}}</li>
                            <li>{{characterDetails.gender}}</li>
                            <li>{{characterDetails.status}}</li>
                            <li>{{characterDetails?.origin?.name}}</li>
                            <li>{{characterDetails?.location?.name}}</li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
  name: "CharacterComponent",
  data() {
    return {
      characters: [],
      characterDetails: [],

    };
  },
  methods: {
    addToFavorites(character) {
      this.$root.$emit("add-to-favorites", character);
      console.log(character);
    },

    getLocalList(){

      const characters = localStorage.getItem("characters");

      if(characters){
        this.characters = JSON.parse(characters)
      }

    },

    saveCharactersListLocal(){
            localStorage.setItem("characters", JSON.stringify(this.characters))
        },
    
    async showDetails(character)
        {

                try {
                    const response = await fetch(`https://rickandmortyapi.com/api/character/${character.id}`);
                    const data = await response.json();
                    this.characterDetails = data;
          
                } catch (error) {
                    console.error('Error fetching character details:', error);
                }  
            

        },

  },
  mounted() {
    
    this.getLocalList();

     if(this.characters.length === 0){
            fetch ('https://rickandmortyapi.com/api/character?page=1')
            .then (response => response.json())
            .then(data => {this.characters = data.results;
            this.saveCharactersListLocal();
            })
            
        }

  },
};
</script>