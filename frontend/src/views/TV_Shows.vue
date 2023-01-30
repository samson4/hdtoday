<template>
  
  <v-container class="ma-5 pa-5">
  <v-row>
  <v-card class="" max-width="344" :key="tv_show.Title" v-for="tv_show in tv_shows">
    <router-link :to="{ name:'movie-detail', params: {slug:tv_show.alt}}">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"><i class="fa fa-play-circle"></i></v-img>
  </router-link>  
    <v-card-title>{{ tv_show.Title }}</v-card-title>
    

    <v-card-subtitle>SS {{ tv_show.Seasons }}</v-card-subtitle>

  

    <v-card-subtitle class="right">EPs {{ tv_show.EPs }}</v-card-subtitle>

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
      tv_shows:[]
    }
  },
  async created(){
    try{
    const data = await fetch('http://localhost:3000/tv_shows')
    const tv_show = await data.json()
    this.tv_shows = tv_show
    }catch(error){
      console.log(error)
    }
  },
 

}
</script>

<style scoped>
v-row{
  display: flex;
}
</style>