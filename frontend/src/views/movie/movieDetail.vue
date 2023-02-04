<template>
  <v-div class="container" style="background-image:url('/vue/hdtoday-clone/frontend/public/wakanda-bg.jpg')">
  <v-breadcrumbs>Home{{ previous }}</v-breadcrumbs>
    <v-img  src="/wakanda-bg.jpg"><v-card-title> {{slug}}</v-card-title></v-img>
    
  
    
  <div >
    <v-card
    class="mx-auto mx-2 my-3"
    width="900"
    border-radius="10"
  >
    <v-card-text>
      <v-avatar size="260" rounded> <v-img  width="250" height="380"   src="/wakanda.jpg" alt=""></v-img></v-avatar><v-btn class="watch" color="blue"> <i class="fa fa-play"></i>Watch now</v-btn><v-chip class="favorite"><i class="fa fa-plus"></i>Add to favorite</v-chip>
      
      <div>BlackPanter: Wakanda Forever</div>
   
      <p class="text-h4 text--primary">
        <v-btn flat border><i class="fa fa-video"></i> Trailer </v-btn>  <v-btn flat border>HD</v-btn>
      </p>
      <p>{{ Slug }}</p>
      <p>Released</p>
      <p>Genre:</p>
      <p>Casts</p>

      <div class="text--primary">
        
      </div>
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
  {{ name }}
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
  float:initial;
}

</style>