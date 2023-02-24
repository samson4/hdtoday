<template>

<v-container class="card ma-3 pa-3" >
    
  <v-row justify="space-around" >

  <v-card  max-height="460"  max-width="256" :key="favorite.Title" v-for="favorite in favorites">
   

    <v-img  width="250" height="380" :src="favorite.Poster"><i  @click="deleteFavorite(favorite.id)" class="fa fa-window-close"></i>

      <v-chip :ripple="false" class="chip ma-2"  label small >{{ favorite.Quality }}</v-chip>
    </v-img>

 
    <v-card-title>{{ favorite.Title }}</v-card-title>
    

    <v-card-subtitle>SS {{ favorite.Seasons }} <span class="dot">.</span> EPs {{ favorite.EPs }} <v-chip class="tag" label small>{{ favorite.Tag }}</v-chip></v-card-subtitle>

  </v-card>

</v-row>

</v-container>
</template>
<script>
import axios from 'axios'

export default {

data(){
    return{
    breadcrumb:this.$route.name,
    favorites:[],
    }
},
methods:{
    deleteFavorite(id){
        this.tv_shows = this.tv_shows.filter((tv_show)=>tv_show.id !== id)
    }
},
async created(){
  const Token = sessionStorage.getItem('Token')
  const config = {
            headers:{
                Authorization:`Bearer ${Token}`
            }
        }
  const payload = await axios.get('http://localhost:8008/user/favorite',config)
  console.log(payload.data.favorites)
  this.favorites = payload.data.favorites

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