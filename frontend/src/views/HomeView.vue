<template>
  <div>
  <nav class="my-5 mx-4">
    
    <Movie :movies="movies"/>
    <h2>Latest TV Shows</h2>
    <TV_Shows :tv_shows="tv_shows"/>
  </nav>
</div>

</template>

<script>
import axios from 'axios';
import { defineComponent } from 'vue';

import Movie from '@/components/Movie.vue';
import TV_Shows from './TV_Shows.vue';
// Components


export default defineComponent({
  name: 'HomeView',
  components: {
    Movie,
    TV_Shows
  },
  data(){
    return{
      movies:[]
    }
  },
  async mounted(){
    try{
    const data=await axios.get('http://localhost:8008/movie')
    const movies = await data.data  
    this.movies = movies
    console.log(this.movies)
    }catch(error){
      console.log(error)
    }
    
  }
  
  });
</script>
<style scoped>

</style>
