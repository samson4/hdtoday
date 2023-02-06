<template>
  <v-div class="container" style="background-image:url('/vue/hdtoday-clone/frontend/public/wakanda-bg.jpg')">
  <v-breadcrumbs>Home{{ previous }}</v-breadcrumbs>
    <v-img  src="/wakanda-bg.jpg"><v-card-title color="text--grey"> {{slug}}</v-card-title><i  class="fa fa-play-circle text-center"></i></v-img>
    
    <br>


    <v-card
    class="mx-auto"
    width="900"
    border-radius="10"
  >
    <v-card-text>
      <v-card-text class="text-center">If current server doesn't work please try other servers below.</v-card-text>
      <v-row dense align="center" class="fill-height">
        <v-col class="mr-1" cols="12" align-self="start">
      <v-div class="text-center">
        <V-chip class="ma-2" large><i><small>Server UpCloud</small></i></V-chip>
        <V-chip class="ma-2" x-large><i><small>Server Vidcloud</small></i></V-chip>
        <V-chip class="ma-2" x-large><i><small>Server Streamlare</small></i></V-chip>
      </v-div>  
    </v-col>
    </v-row>
    </v-card-text>
  </v-card>
  <br>
  <div>
    <v-card
    class="mx-auto"
    width="900"
    border-radius="10"
  >
    <v-card-text>
      <v-row dense align="center" class="fill-height">
        <v-col class="mr-1" cols="12" align-self="start">
          <v-avatar class="avatar mb-12" size="260" rounded> <v-img  width="250" height="380"   src="/wakanda.jpg" alt=""></v-img></v-avatar><v-div class="watch"><v-btn color="blue"> <i class="fa fa-play"></i>Watch now</v-btn></v-div><v-chip class="favorite"><i class="fa fa-plus"></i>Add to favorite</v-chip>     
          <br>
          <br>
          
        <v-div class="info " justify="center">
        <h2>{{slug}}</h2>
          <br>
          <v-btn flat border><i class="fa fa-video"></i> Trailer </v-btn>  <v-btn flat border>HD</v-btn> <v-btn color="warning" flat>IMDB:N/A</v-btn>
        <p>{{ Slug }}</p>
        <p>Released:</p>
        <p>Genre:</p>
        <p>Casts:</p>
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
  
  <v-div class="mx-auto">
    
    <v-row align="center" justify="space-around">
      <v-chip small>Watch Black Panther: Wakanda Forever Online Free</v-chip>
      <v-chip small> Black Panther: Wakanda Forever Online Free</v-chip>
      <v-chip small>Where to watch Black Panther: Wakanda Forever</v-chip>
      <v-chip small> Black Panther: Wakanda Forever movie Free online</v-chip>
      <v-chip small> Black Panther: Wakanda Forever Free online</v-chip>
    </v-row>
    
  
</v-div>
  <br>
  <br>
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
export default {
  name:"movie-detail",
  props:['slug'],
  data(){
    return{
      previous:this.$route.path
    }
  },
  mounted(){
    console.log(this.$route)
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