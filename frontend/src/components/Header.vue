<template>
  <v-toolbar color="indigo" >
      <v-btn  @click="toggleSidebar"><i class="fa fa-bars"></i></v-btn>
      <v-spacer></v-spacer>
        <v-btn class="right" flat @click="toggleModal"><i left class="fa fa-user"></i></v-btn>
      
      <v-form class="search-form "  action="">
      <i class="fa fa-search" aria-hidden="true"></i>
      <input type="text" v-model="Search" color="text--white" placeholder="Enter Keywords...">
      </v-form>
    
      
  <v-navigation-drawer v-model="drawer" app color="black">
    <v-btn @click="toggleSidebar" class="close-menu-btn info"><i class="fa fa-angle-left mr-2">Close menu</i></v-btn>
    <v-list v-for="catagory in Catagories" :key="catagory.catagory"  :href="catagory.route">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title ><a :href="catagory.route">{{ catagory.catagory }}</a></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</v-toolbar> 
 
</template>

<script>

export default {
  components:{
    
  },
  props:['logged'],

  data(){
    return{
      Search:'',
      drawer:false,
      Catagories:[
        {catagory:'Home',route:"/"},
        {catagory:'Genre',route:"/genre"},
        {catagory:'Country',route:"/Country"},
        {catagory:'Movies',route:"/Movies"},
        {catagory:'TV Shows',route:"/TV_Shows"},
        {catagory:'Top IMDB',route:"/Top_IMDB"},
        {catagory:'Android App',route:"/app"},
      ]
    }
  },
methods:{
  toggleModal(){
    this.$emit("toggleModal")
  },
  toggleSidebar(){
    this.drawer = !this.drawer
  }

}

}
</script>

<style scoped>
  a{
    color: azure;
  }
  /* v-toolbar{
    color: #144184;
  }
    .search-form {
    position: relative;
    align-items: center;
    background: white;
    color: black;
    margin-top: 45px;
    margin-left: 12px;
    margin-right: 12px;
    border-radius: 2px;
    width: 95%;
    height: 100%;
    }
    .user-btn .fa-user{
      float: right;
    }
    .close-menu-btn{
    position: relative;
    float: left;
    } */
</style>