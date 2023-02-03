<template>
  <v-container>
  <div v-for=" movie in movies" :key="movie.Title">
    <h1>{{ movie.userName }}</h1>
    <h2>{{movie.emailAddress}}</h2>
    <h2>{{movie.Quality}}</h2>
    <h2>{{movie.Minutes}}</h2>
    <img :src="movie.Poster">
    <h2>{{movie.Tag}}</h2>
    <h2>{{movie.Year}}</h2>
  </div>
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
    const payload = await axios.get("http://localhost:8008/user/")
    this.movies = payload.data
    console.log(payload)
    } catch (error) {
        console.log(error)
    }

    }
}
</script>

<style>

</style>