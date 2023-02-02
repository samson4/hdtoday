<template>
  <v-container>
    <v-row>
    <v-col
      v-for="member in team"
      :key="member.name"
      class="d-flex child-flex"
      cols="4"
    >
    
      <v-img
        :src="member.avatar"
        
        aspect-ratio="1"
        class="grey lighten-2"
      >
      
      
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
          
        </template>
      </v-img>
      
      
    </v-col>
    
  </v-row>
</v-container>

</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
  name:'about',
  components:{
    Header,
    Footer
  },
  data(){
    return{
      team:[
      {name:"The net ninja",role:"web developer",avatar:"/DUNE.jpg"},
      {name:"ryu",role:"web designer",avatar:"/download.jpg"},
      {name:"chun li",role:"graphics mavrik",avatar:"/puss_in_boots.jpg"},
      {name:"The net ninja",role:"web developer",avatar:"/DUNE.jpg"},
      {name:"ryu",role:"web designer",avatar:"/download.jpg"},
      {name:"chun li",role:"graphics mavrik",avatar:"/puss_in_boots.jpg"}
      ],
    }
  }
}
</script>

<style scoped>

</style>