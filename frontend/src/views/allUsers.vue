<template>
    
    <v-div >
        <div v-for="user in users" :key="user.id">
            <p>{{ user.userName}}</p>
            <p>{{ user.emailAddress}}</p>
            <p>{{ user.favorite }}</p>
        </div>
  

  </v-div>

</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            users:[]
        }
    },
    created(){
        this.getUsers()
        
    },
    methods:{
        async getUsers(){
            const payload =await axios.get("http://localhost:8008/user/")
            this.users= payload.data
            console.log(payload.data)
        }
    }
    }
</script>

<style>

</style>