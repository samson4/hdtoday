<template>
    <v-container class="grey lighten-5">
      <div class="team"></div>
      <h1 class="subheading grey--text">Team</h1>
      <v-container class="my-5" align-center>
        <v-layout>
    <v-row no-gutters>
      <v-flex xs12 sm6 md4 lg3 v-for="team in team" :key="team.name">
        <v-card flat class="text-xs-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar  size="100" class="grey lighten-2">
              <img :src="team.avatar" alt="">
            </v-avatar>
          </v-responsive>
           <v-card-text>
            <div class="subheading">{{ team.name }}</div>
            <div class="grey--text">{{ team.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn flat color="grey">
              <v-icon small left>message</v-icon>
              <span>message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      </v-row>
    </v-layout>
  </v-container>
      
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
      {name:"chun li",role:"graphics mavrik",avatar:"/puss_in_boots.jpg"}
      ],
    }
  }
}
</script>

<style scoped>

</style>