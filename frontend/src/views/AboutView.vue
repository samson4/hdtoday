<template>
  <v-container>
    <v-row>
    <v-col
      v-for="member in allTeams"
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
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  name:'about',
  components:{
    Header,
    Footer
  },
  computed:mapGetters(['allTeams']),
  data(){
    return{
 
    }
  }
}
</script>

<style scoped>

</style>