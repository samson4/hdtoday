<template>
  <v-app>
    <v-main>
      <Header @toggleModal="toggleModal"/>
      <HomeView />
      <div v-if="showLogin">
        <Modal @closeModal="toggleModal" @logged="autenticated"/>
      </div>
      <Footer  />
    </v-main>
  </v-app>
</template>

<script>
import Modal from './components/Modal.vue';
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue'
export default {
  name: 'App',
  props:[],
  components:{
    Modal,
    Header,
    HomeView,
    Modal,
    Footer
  },
  data: () => ({
    //
    showLogin:false,
    loggedIn:false,
    
  }),
  methods:{
    toggleModal(){
      this.showLogin =! this.showLogin
    },
    autenticated(){
      this.loggedIn=!this.loggedIn
    }
    }
  }

</script>
<style >

</style>
