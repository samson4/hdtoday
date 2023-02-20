<template>

  <v-container class="card ma-3 pa-3">
  <v-row justify="space-around">
  <v-card   max-height="460"  max-width="256" :key="tv_show.Title" v-for="tv_show in tv_shows">
    <router-link :to="{ name:'movie-detail', params: {id:tv_show._id}}">

    <v-img @mouseover="hoverPlay" @mouseout="hoverPlay" contain width="250" height="380" :src="tv_show.Poster"><i :class="[hover?'fa fa-play-circle' : '']"></i>

      <v-chip :ripple="false" class="chip ma-2"  label small >{{ tv_show.Quality }}</v-chip>
    </v-img>

  </router-link>  
    <v-card-title>{{ tv_show.Title }}</v-card-title>
    

    <v-card-subtitle>SS {{ tv_show.Seasons }} <span class="dot">.</span> EPs {{ tv_show.Episodes }} <v-chip class="tag" label small>TV</v-chip></v-card-subtitle>

  

    <v-card-subtitle class="right"></v-card-subtitle>

  </v-card>
  
</v-row>
</v-container>

</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  components:{
    Header,
    Footer
  },
  // props:['tv_shows'],
  data(){
    return{
      tv_shows:[],
      hover:false
    }
  },
  methods:{
    hoverPlay(){
      this.hover = !this.hover
    }

  },
  async created(){
    try{
    const payload = await axios.get('http://localhost:8008/movie/tv_show')
    const tv_show = await payload.data
    this.tv_shows = tv_show
    console.log(tv_show)
    }catch(error){
      console.log(error)
    }
  },
 
}
</script>

<style scoped>

.chip{
  float: right;
  color: black;
  background: white;
}
.tag{
  float: right;
}
</style>