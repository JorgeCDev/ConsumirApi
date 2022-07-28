<template>
  <div class="home">

    <img alt="Tec-logo" src="../assets/TecFlix logo Negro.png" />

  <div class="input-group mx-auto mt-5 w-75">
  <input type="text"  v-model="Buscar"   id="Buscar" class="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="Buscar">
    <button class="btn btn-tecnaranja mb-3"  @click="getPeliculas(Buscar)" type="button" id="btn-buscar">Buscar</button>    
    </div>

    <div class="d-flex flex-column justify-content-center align-items-center">

  <div style="color:#7A0796" v-if="isFound">No hay Resultados!</div>
 <div style="color:#7A0796" v-else-if="isResult">Demasiados resultados!</div>     
<Tarjeta v-else class="mt-3"
v-for="p in peliculas"
:key="p.imdbID"
:imdbID="p.imdbID"
:Year="p.Year"
:Tipo="p.Type"
:Titulo="p.Title"
:Poster="p.Poster"
/>

</div>
  </div>

</template>

<script> 
// @ is an alias to /src
import Tarjeta from '../components/Tarjeta.vue';
import {mapState, mapActions} from "vuex";

export default {
  name: "Home",

  components: {
    Tarjeta,
  },

  methods: {

    ...mapActions(['getPeliculas']),

  },
  computed: {
    
     ...mapState(['peliculas','isResult','isFound']),

  },
};
</script>

<style scoped>
#Buscar{
  color:#fff;
  border: 3px solid #323233;
}
.btn-buscar{
 font-weight: 700;
}




</style>