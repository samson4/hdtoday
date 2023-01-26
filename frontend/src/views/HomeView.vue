<template>
  <nav class="my-5 mx-4">
    <v-btn><router-link to="/"><i class="fa fa-play-circle"></i> Movies</router-link></v-btn>|
    |<v-btn><router-link to="TV-Shows"><i class="fa fa-list-ul"></i> TV Shows</router-link></v-btn>
    <router-link to="about">About</router-link>
    <Movie :movies="movies"/>
    <TV_Shows :tv_shows="tv_shows"/>
  </nav>
  

</template>

<script>
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
      movies:[
    {
      Quality:"HD",
      Year:2021,
      Title:"Puss in Boots: The Last Wish",
      Minutes:"104m",
      Poster:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      href:'/movie/watch-puss-in-boots-the-last-wish-full-91342',
      alt:"watch-Puss in Boots: The Last Wish",
    },
    {
      Quality:"HD",
      Year:2023,
      Title:"M3GAN",
      Minutes:"102m",
      Poster:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      href:'/movie/watch-m3gan-full-91330',
      alt:"watch-m3gan"
    },
    {
      Quality:"HD",
      Year:2022,
      Title:"DUNE",
      Minutes:"124m",
      Poster:'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
      href:'/movie/watch-dune-full-91342',
      alt:"watch-dune"
    }
    ],
    tv_shows:[
    {
      Quality:"HD",
      Seasons:1,
      Title:"The Last of Us",
      EPs:2,
      Poster:'src/assets/the_last_of_us',
      href:'/movie/watch-the-last-of-us-full-91342',
      alt:"watch-the last of us",
    },
    {
      Quality:"HD",
      Season:6,
      Title:"Game of Thrones",
      EPs:6,
      Poster:'src/assets/game_of_thrones.jpg',
      href:'/movie/game_of_thrones',
      alt:"watch-game-of-thrones"
    },
    {
      Quality:"HD",
      Season:1,
      Title:"House of the Dragon",
      EPs:10,
      Poster:'src/assets/house_of_the_dragon.jpg',
      href:'/movie/house_of_the_dragon-full-91342',
      alt:"watch-house-of-the-dragon"
    }
    ]
    }
  }
  
  });
</script>
<style scoped>

</style>
