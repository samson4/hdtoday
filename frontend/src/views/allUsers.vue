<template>
    <v-container>
      <v-div>
        <form enctype="multipart/form-data">
            <v-row>
                <v-col>
                    <label for="poster">Poster</label>
                    <input type="file" name="poster">
                </v-col>
                <v-col>
                    <label for="Title">Title</label>
                    <input type="text">
                </v-col>
                <v-col>
                    <label for="quality">Quality</label>
                    <select name="" id="">
                        <option value="HD">HD</option>
                        <option value="TS">TS</option>
                    </select>
                </v-col>
            </v-row>
            <button type="submit">Submit</button>
        </form>
      </v-div>  
    <v-div >
        <div v-for="user in users" :key="user.id">
            <p>{{ user.userName}}</p>
            <p>{{ user.emailAddress}}</p>
            <p>{{ user.favorite }}</p>
        </div>
        

  </v-div>
</v-container>

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