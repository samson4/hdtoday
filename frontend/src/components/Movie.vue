<template>
  <v-container class=" card ma-5 pa-5">
    <v-row >
  <v-card width="256" height="480" :key="movie.Title" v-for="movie in movies">
  <router-link :to="{name:'movie-detail' , params:{ slug: movie.alt}}">
   
    <v-img contain :src="movie.Poster"><i class="fa fa-play-circle"></i>
   
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
    data(){
     return{
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