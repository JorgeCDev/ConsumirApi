<template>
<router-link id="card" class="card mb-3 w-75 " :to="`/home/detalles/${imdbID}`"> 
 <!-- <div class="card mb-3 w-75 " > -->
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="Poster" class="img-fluid rounded-start" alt="Tarjeta">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title mb-3"  id="link">{{Titulo}}</h5>
        <p class="card-text mb-0">{{"# "+imdbID.toUpperCase()}}</p>
        <p class="card-text mb-0">{{Tipo.toUpperCase()}}</p>
        <p class="card-text mb-0">{{Year}}</p>
      </div>
    </div>
  </div>
<!-- </div> -->
 </router-link>
</template>

<script>
export default {
    name:'Tarjeta',
    props:{
        imdbID:String,
        Titulo:String,
        Tipo:String,
        Year:String,
        Poster:String
    },
};

</script>

<style scoped>
  
.card-title{
  color: #fff;
  font-size: 1.5em;
  word-break:normal;
  font-weight: 700;
  font-style:italic ;
}
#card a.router-link-active:hover {

 text-decoration:none;

}
.card-text{
  color: lightgray;
  font-weight: 600;
 letter-spacing: 2px;
}

</style>