<template>
  <div class="container d-flex flex-column justify-content-center align-items-center">

  <h1 class="detalles">Detalles</h1>
    
    <div class="card mt-3 mb-3 w-50 " >
  <img :src="pelicula.Poster" class="card-img-top"  style="height:500px;" alt="...">


    <div class="card-body">
    <h5 class="card-title">{{pelicula.Title}}</h5>
        <div class="d-flex justify-content-between">
        <p class="card-text">{{"País:  "+pelicula.Country}}</p>
        <p class="card-text">{{"Año:  "+pelicula.Year}}</p>
        <p class="card-text" 
       :style="{color:'#'+`${pelicula.imdbRating<=4?'dc3545':this.pelicula.imdbRating<8?'ffc107':'28a745'}`}">
        {{"Calificación:  "+pelicula.imdbRating}}</p>
        
        </div>
    <p class="card-text justificado">{{"\""+pelicula.Plot+"\""}}</p>
    <p class="card-text"><small class="text-muted">{{pelicula.Genre}}</small></p>
    
  </div>
</div>


</div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    name:"Detalles",

    methods: {

        ...mapActions(['getPelicula']),
  
        },

        computed: {
            ...mapState(['pelicula']),
        },

        created() {
            this.getPelicula(this.$route.params.id)
        }
    };
</script>

<style>
    .card-title{

        color:#fff;
        font-weight:700;
        letter-spacing:2px;
    }


    .card-text{

        color:#fff;
        font-weight:500;
        font-size:.9em;
    }
    .justificado{

        text-align: justify;
        font-style:italic;
        font-size:.8em;
    }

    .detalles{
        color:#fff;
        font-weight:500;
        letter-spacing:3px;
    }

</style>