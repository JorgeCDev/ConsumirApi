import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peliculas:[],
    pelicula:{},
    isResult:false,
    isFound:false,
  },
  mutations: {
  SET_PELICULAS(state,peliculas){
    state.peliculas=peliculas;
  },
  SET_PELICULA(state,pelicula){
    state.pelicula=pelicula;
  },
  SET_ERROR(state,error){
   

    if(error.Error=='Movie not found!'){

          state.isFound=true;
          state.isResult=false;
      
    }else if(error.Error=='Too many results.'){

          state.isResult=true;
           state.isFound=false;
    }else{
          state.isFound=false;
          state.isResult=false;
    }
  },


  },
  actions: {

    getPeliculas({commit},buscar){

      if(buscar==undefined){
        buscar="";
        }

      axios
      .get(`https://www.omdbapi.com/?s=${buscar}&apikey=1939eb4e`)
      .then(response => {
        commit('SET_PELICULAS', response.data.Search);
        commit('SET_ERROR', response.data);      
      })
      .catch(error => console.log(error));

      
    },
    getPelicula({commit},id){

      axios
        .get(`https://www.omdbapi.com/?i=${id}&Plot=full&apikey=1939eb4e`)
        .then(response => {
          commit('SET_PELICULA',  response.data)
        })
        .catch(error => console.log(error))
  
    },


  },
});
