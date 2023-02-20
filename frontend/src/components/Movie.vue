<template>
  <v-container  class=" card ma-3 pa-3">
    <v-row justify="space-around" >
  <v-card  @mouseover="hoverPlay" @mouseout="hoverPlay" max-width="256" max-height="460" :key="movie.Title" v-for="movie in movies">
  <router-link  :to="{name:'movie-detail' , params:{ id: movie._id}}">
   
    <v-img contain width="250" height="380" :src="movie.Poster"><i :class="[hover?'fa fa-play-circle' : '']"></i>
   
    <v-chip :ripple="false" class="chip ma-2"  label x-small outlined >{{ movie.Quality }}</v-chip>
    </v-img>
  </router-link>
  <v-card-title>{{ movie.Title }}</v-card-title>
    <v-card-subtitle>{{ movie.Year }} <span class="dot">.</span> {{ movie.Minutes }} <v-chip class="tag" label small>{{ movie.Tag }}</v-chip></v-card-subtitle>
  </v-card>
  </v-row>
  <v-spacer></v-spacer>
</v-container>

</template>

<script>
export default {
    props:['movies'],
    components:{

    },
    methods:{
      hoverPlay(){
        this.hover = !this.hover
      }
    },
    data(){
     return{
      hover:false,
    }
},

}
</script>

<style scoped>
.chip{
  float: right;
  background: white;
  color: black;
  }
  .tag{
    float: right;
  }
</style>