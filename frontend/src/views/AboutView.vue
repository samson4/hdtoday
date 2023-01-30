<template>
  <h1>About</h1>
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
  // async created(){
  //   try{
  //     const data = await axios.get("http://localhost:8008/user/")
  //   console.log(data)
  //   }catch(error){
  //     console.log(error)
  //   }
    
  // }


}
</script>

<style>

</style>