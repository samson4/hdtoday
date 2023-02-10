<template>
  
  <v-toolbar class="toolbar mb-4">
      
      <v-btn  @click="toggleSidebar"><i class="fa fa-bars"></i></v-btn>
      <v-spacer></v-spacer>
      <v-div>
        <v-btn v-if="!loggedIn" class="right" flat >
          <i  @click="toggleModal" left class="fa fa-user">  
          </i> 
        </v-btn>
        
        <v-btn  v-else class="right" flat >
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
            <v-btn color="warning lighten-2" v-bind="attrs" v-on="on" >user</v-btn> 
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Profile</v-list-item-title>
                <v-list-item-title>My Favorite</v-list-item-title>
                <v-divider></v-divider>
                <v-list-item-title>Logout</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
        
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
  props:['loggedIn'],

  data(){
    return{
      Search:'',
      drawer:false,
      name:'',
      Catagories:[
        {catagory:'Home',route:"/"},
        {catagory:'Genre',route:"/genre"},
        {catagory:'Country',route:"/Country"},
        {catagory:'Movies',route:"/movie"},
        {catagory:'TV Shows',route:"/tv-show"},
        {catagory:'Top IMDB',route:"/Top-IMDB"},
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
  },
  getUsername(){
    this.name=localStorage.getItem(user)
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