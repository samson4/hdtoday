<template>
  <v-div class="container" style="">
  <v-breadcrumbs>Home{{ previous }}</v-breadcrumbs>
    <v-img width="100%" height="500" v-show="playVideo==false" @click="play"  cover :src="movieDetail.Poster"><v-card-title> {{movieDetail.Title}}</v-card-title><i  class="fa fa-play-circle text-center"></i></v-img>
    <iframe v-show="playVideo" width="100%" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"></iframe>
    <br>
  <br>
  <div>
    <v-card
    class="mx-auto"
    width="1200"
    border-radius="10"
  >
    <v-card-text>
      <v-row dense align="center" class="fill-height">
        <v-col class="mr-1" cols="12" align-self="start">
          <v-avatar class="avatar mb-12" size="260" rounded> <v-img  width="250" height="380"   :src="movieDetail.Poster" alt=""></v-img></v-avatar><v-div class="watch"><v-btn color="blue"> <i class="fa fa-play"></i>Watch now</v-btn></v-div><v-chip @click="addtoFavorites" class="favorite"><i class="fa fa-plus"></i>Add to favorite</v-chip>     
          <br>
          <br>
          
        <v-div class="info " justify="center">
          <br>
        <h2>{{slug}}</h2>
          <br>
          <v-btn flat border><i class="fa fa-video"></i> Trailer </v-btn>  <v-btn flat border>HD</v-btn> <v-btn color="warning" flat>IMDB:N/A</v-btn>
          
        <p>{{ movieDetail.Description }}</p>
        
        <p>Released: {{ moment(movieDetail.Released).format('YYYY') }}</p>
        <p>Genre: {{ movieDetail.Genre[0] }}</p>
        <p>Casts: {{ movieDetail.Casts[0] }}</p>
        <v-spacer></v-spacer>
        <p>Duration: {{ movieDetail.Duration }}</p>
        <p>Country: {{ movieDetail.Country[0] }}</p>
        <p>Production: {{ movieDetail.Production[0] }}</p>
      </v-div>
    </v-col>
    </v-row>
    <v-div class="mx-4" >
    <v-btn color="info"><i class="fa fa-thumbs-up"></i>Like</v-btn> <v-btn class="down"><i class="fa fa-thumbs-down"></i> Dislike</v-btn>
  </v-div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
  <br>
  
  <v-div class="mx-auto" width="1200">
    
    <v-row align="center" justify="space-around">
      <v-chip small>{{`Watch ${movieDetail.Title} Online Free`}}</v-chip>
      <v-chip small> {{`${movieDetail.Title} Online Free`}}</v-chip>
      <v-chip small>{{`Where to watch ${movieDetail.Title}`}}</v-chip>
      <v-chip small> {{`${movieDetail.Title} movie Free online`}}</v-chip>
      <v-chip small> {{` ${movieDetail.Title} Free online`}}</v-chip>
    </v-row>
    
  
</v-div>
  <br>
  <br>
  <v-card
    class="mx-auto"
    width="1200"
    border-radius="10"
  >
    <v-card-text>
      <v-card-text class="text-center">If current server doesn't work please try other servers below.</v-card-text>
      <v-row class="fill-height" justify="space-around">
       <v-col class="mr-1" cols="12" align-self="start">
        <v-div class="servers">
          <v-btn ><i class="fa fa-play"></i><small>Server UpCloud</small></v-btn>
          <v-btn><i class="fa fa-play"></i><small>Server Vidcloud</small></v-btn>
          <v-btn><i class="fa fa-play"></i><small>Server Streamlare</small></v-btn>
        </v-div>  
       </v-col>
    </v-row>
    </v-card-text>
  </v-card>
  <v-div>
    <v-card-title class="mx-2"> You May Also Like</v-card-title>
    <v-container class="card ma-3 pa-3" >
    
    <v-row justify="space-around" >
  
    <v-card  max-height="460"  max-width="256">
     
  
      <v-img  width="250" height="380" src="/DUNE.jpg">
  
        <v-chip class="chip ma-2"  label small >HD</v-chip>
      </v-img>
  
   
      <v-card-title>Dune</v-card-title>
      
  
      <v-card-subtitle>SS 1 <span class="dot">.</span> EPs 2 <v-chip class="tag" label small>TV</v-chip></v-card-subtitle>
  
    </v-card>
  
  </v-row>
  
  </v-container>
  </v-div>
  </v-div>

</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name:"movie-detail",
  props:['id'],
  data(){
    return{
      previous:this.$route.path,
      _id:this.$route.params.id,
      movieDetail:{},
      playVideo:false,
    }
  },
  async created(){
   const payload = (await axios.get(`http://localhost:8008/movie/${this._id}`))
   this.movieDetail = payload.data
   console.log(this.movieDetail)
   

  },
  methods:{
    addtoFavorites(){
      
    },
    moment(){
      return moment()
    },
    play(){
      this.playVideo=true
    }
  }
}

</script>

<style>
.film-poster{

  padding: 10% 10% 10% 0.5%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

}
.favorite{
  float: right;
  border-radius: 6px;
  background: gainsboro;
}
.watch{
  float:left;
}
.avatar{
  float: left;
}



</style>