<template>
  
  <v-container class="ma-5 pa-5">
  <v-row>
  <v-card class="" max-width="344" :key="tv_show.Title" v-for="tv_show in tv_shows">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-title>{{ tv_show.Title }}</v-card-title>
    

    <v-card-subtitle>SS {{ tv_show.Seasons }}</v-card-subtitle>

  

    <v-card-subtitle class="right">EPs {{ tv_show.EPs }}</v-card-subtitle>

    <v-card-actions>
      <router-link :to="{ name:'movie-detail', params: {slug:tv_show.alt}}">
      <v-btn><i class="fa fa-play"></i></v-btn>
      </router-link>
     </v-card-actions>
   


  </v-card>
  
</v-row>
</v-container>

</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  components:{
    Header,
    Footer
  },
  // props:['tv_shows'],
  data(){
    return{
      tv_shows:[
    {
      Quality:"HD",
      Seasons:1,
      Title:"The Last of Us",
      EPs:2,
      Poster:'src/assets/the_last_of_us',
      href:'/movie/watch-the-last-of-us-full-91342',
      alt:"watch-the-last-of-us",
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

}
</script>

<style scoped>
v-row{
  display: flex;
}
</style>