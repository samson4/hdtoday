<template>
  
  <v-toolbar class="toolbar">
    
      <v-btn  @click="toggleSidebar"><i class="fa fa-bars"></i></v-btn>
      <v-spacer></v-spacer>
      <v-div>
        <v-btn class="right" flat @click="toggleModal"><i left class="fa fa-user"></i></v-btn>
      </v-div>
     <v-div>
      <v-form class="search-form "  action="">
      <i class="fa fa-search" aria-hidden="true"></i>
      <input class="rounded-xl" type="text" v-model="Search"  placeholder="Enter Keywords...">
      </v-form>
     </v-div>
    
  
 
  <v-navigation-drawer v-model="drawer" app class="navigation">
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
 .toolbar{
  background: #144184;
  color: white;

 } 

 .navigation{
  color: white;
  background: black;
 }
</style>