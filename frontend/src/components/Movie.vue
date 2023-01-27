<template>
  <v-container class="   ma-5 pa-5">
    <v-row>
  <v-card class="" max-width="344" :key="movie.Title" v-for="movie in movies">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-title>{{ movie.Title }}</v-card-title>
   

    <v-card-subtitle>{{ movie.Year }}</v-card-subtitle>


    <v-card-subtitle right>{{ movie.Quality }}</v-card-subtitle>

    <v-card-actions>
    <router-link :to="{name:'movie-detail' , params:{ slug: movie.alt}}">
      <v-btn><i class="fa fa-play"></i></v-btn>
    </router-link>
     </v-card-actions>

  </v-card>
  
</v-row>
</v-container>

</template>

<script>
export default {
    props:['movies'],
    components:{

    },
    data(){
     return{
    }
},
}
</script>

<style scoped>
v-row{
  display: flex;
}
</style>