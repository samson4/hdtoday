<template>
   <v-div>
    <v-div>
       <p> Home / {{ breadcrumb }}</p>
    </v-div>
   
  <v-card  class="ma-4">  
   
  <form @submit.prevent="handleSubmit">
    <label>YOUR NAME</label>
    <input  type="text" required v-model="userName">
    <label>EMAIL ADDRESS</label>
    <input type="email" required v-model="email">
    <label>Password</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">
        {{ passwordError }}
    </div>
    <label >CONFIRM NEW PASSWORD</label>
    <input type="password" required v-model="confirmPassword">
    <div>
        <v-btn type="submit" class="submit">Submit</v-btn>
    </div>
  </form>
</v-card>
</v-div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            breadcrumb:this.$route.name,
            userName:'',
            email:'',
            password:"",
            confirmPassword:''

        }
    },
    created(){
        const Token = localStorage.getItem('Token')
       console.log(localStorage.getItem('Token'))

    },
    methods:{
       async handleSubmit(){

        const config = {
            headers:{
                Authorization:`Bearer ${this.Token}`
            }
        }
        const updateUserData = await axios.put("http://localhost:8008/user/profile",{Name:this.userName,Email:this.email,Password1:this.password,Password2:this.confirmPassword},config)
        console.log(updateUserData)
        }
    }
}
</script>

<style scoped>
form {
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input, select{
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}
input[type="checkbox"] {
    display: inline-block;
    width:16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 16px;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
.submit {
    background: #2196f3;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 3px;
}


.error {
    color:#ff0062;
    margin-top: 10px;
    font-size: 0.8em;
}
</style>