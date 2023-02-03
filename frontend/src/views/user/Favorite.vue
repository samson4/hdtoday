<template>

<v-container class="card ma-3 pa-3" >
    
  <v-row  >

  <v-card  max-height="460"  max-width="256" :key="tv_show.Title" v-for="tv_show in tv_shows">
   

    <v-img  width="250" height="380" :src="tv_show.Poster"><i  @click="deleteFavorite(tv_show.id)" class="fa fa-window-close"></i>

      <v-chip :ripple="false" class="chip ma-2"  label small >{{ tv_show.Quality }}</v-chip>
    </v-img>

 
    <v-card-title>{{ tv_show.Title }}</v-card-title>
    

    <v-card-subtitle>SS {{ tv_show.Seasons }} <span class="dot">.</span> EPs {{ tv_show.EPs }} <v-chip class="tag" label small>{{ tv_show.Tag }}</v-chip></v-card-subtitle>

  </v-card>

</v-row>

</v-container>
</template>
<script>
export default {
data(){
    return{
        breadcrumb:this.$route.name,
        tv_shows:[{
        "Quality":"HD",
        "id":1,
        "Seasons":1,
        "Title":"Dune",
        "EPs":2,
        "Poster":"/Dune.jpg",
        "Tag":"TV",
        "href":"/movie/watch-the-last-of-us-full-91342",
        "alt":"watch-the last of us"
    },
    {
        "Quality":"HD",
        "id":2,
        "Seasons":1,
        "Title":"Dune",
        "EPs":2,
        "Poster":"/Dune.jpg",
        "Tag":"TV",
        "href":"/movie/watch-the-last-of-us-full-91342",
        "alt":"watch-the last of us"
    },
    {
        "Quality":"HD",
        "id":3,
        "Seasons":1,
        "Title":"Dune",
        "EPs":2,
        "Poster":"/Dune.jpg",
        "Tag":"TV",
        "href":"/movie/watch-the-last-of-us-full-91342",
        "alt":"watch-the last of us"
    },]
    }
},
methods:{
    deleteFavorite(id){
       
        this.tv_shows = this.tv_shows.filter((tv_show)=>tv_show.id !== id)
        
    }
}

    }
</script>

<style>
.fa-window-close{
    color: crimson;
}
.chip{
  float: right;
  color: black;
  background: white;
}
.tag{
  float: right;
}
</style>