<template>
  
  <v-toolbar class="toolbar mb-4">
      
      <v-btn class="align-center" @click="toggleSidebar"><i class="fa fa-bars"></i></v-btn>
      <v-form action="" class="mx-12 align-center">
        <v-text-field class="search" label="Enter Keywords"><i class="fa fa-search"></i></v-text-field>
      </v-form>
      <v-spacer></v-spacer>
      
      <v-div>
        <v-btn v-if="is_loggedin == false" class="right" flat >
          <i  @click="toggleModal" left class="fa fa-user">  
          </i> 
        </v-btn>
        
      <v-menu v-else>
      <template v-slot:activator="{ props }">
        <v-btn class="user ma-4" v-bind="props">{{ name }}<i class="fa fa-caret-down ml-2"></i></v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-list-item-title><a href="/user/profile"><i class="fa fa-user-circle mr-2"></i>Profile </a></v-list-item-title>
          <v-list-item-title><a href="/user/favorite"><i class="fa fa-heart mr-2"></i>My Favorite</a></v-list-item-title>
          <v-divider></v-divider>
          <v-list-item-title @click="logoutMethod" class="logout"><a flat href="/home"><i class="fa fa-sign-out-alt mr-2 "></i>Logout </a></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
        
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
      is_loggedin:false,
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
  
  },
  logoutMethod(){
    
    sessionStorage.removeItem('Token')
    sessionStorage.removeItem('_id')
    localStorage.removeItem('user')
    this.$router.go(-3)
    
  }
},
created(){
  const Token = sessionStorage.getItem('Token')
        if(Token){
            this.is_loggedin=true
            this.name = localStorage.getItem("user") 
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
 .logout{
  color: red;
 }
 .user{
  background-color: #3e8afa;
  color: white;
  border-radius: 28px;
 }
 a {
    text-decoration: inherit;
    color: inherit;
  
}
.search{
background-color:white;
color:black
}

</style>