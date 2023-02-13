<template>
  <v-container  class=" card ma-3 pa-3">
    <v-row justify="space-around" >
  <v-card  @mouseover="hoverPlay" @mouseout="hoverPlay" max-width="256" max-height="460" :key="movie.Title" v-for="movie in movies">
  <a href="#">
   
    <v-img contain width="250" height="380" :src="movie.Poster"><i :class="[hover?'fa fa-play-circle' : '']"></i>
   
    <v-chip :ripple="false" class="chip ma-2"  label x-small outlined >{{ movie.Quality }}</v-chip>
    </v-img>
  </a>
  <v-card-title>{{ movie.Title }}</v-card-title>
    <v-card-subtitle>{{ movie.Released }} <span class="dot">.</span> {{ movie.Duration }} <v-chip class="tag" label small>Movie</v-chip></v-card-subtitle>
  </v-card>
  </v-row>
  <v-spacer></v-spacer>
</v-container>
</template>

<script>

import axios from 'axios'

export default {
    components:{},
    data(){
        return{
            movies:[]
        }
    },
   async created(){
    try {
    const payload = await axios.get("http://localhost:8008/movie")
    this.movies = payload.data
    console.log(payload.data)
    } catch (error) {
        console.log(error)
    }

    }
}
</script>

<style>

</style>