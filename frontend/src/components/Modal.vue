<template>
  <div class="backdrop" >
    <div class="modal">
        <div class="login-modal">
            
            <div v-show="register">
                <h3>Welcome Back<i class="fa fa-times-circle" @click="closeModal"></i></h3>
            <v-div class="logo">
                <v-img height="50" width="44" src="/logo-square.png"  alt=""></v-img>
            </v-div>
            <form action="" @submit="onSubmit">
                <div>
                    <label for="emial">EMAIL ADDRESS</label>
                    <input type="email" id="loginemail" v-model="loginemail" placeholder="name@email.com">
                </div>
                <div>
                    <label for="password">PASSWORD</label>
                    <input type="password" id="loginpassword" v-model="loginpassword" placeholder="Password" required="required">
                </div>
                <div>
                    <input name="remember" type="checkbox" v-model="loginremember" id="remember" >
                    <label for="checkbox">Remember me</label>
                </div>
                
                <div>
                    <v-btn @click="$emit('logged')" type="submit" color="blue" block elevation="2" rounded>Log in</v-btn>
                    
                </div>   
                         
            </form>
            <v-divider></v-divider>
            <div class="my-4">
                    <p>Don't have an account? <v-btn flat @click="registerModal" href="">Register here.</v-btn></p>
            </div> 
            </div>
            <div v-show="!register">
            <form  action="" @submit="authenticate">
                <h3>Create an Account<i class="fa fa-times-circle" @click="closeModal"></i></h3>
                <div>
                    <label for="emial">Name</label>
                    <input type="text" id="name" v-model="name" placeholder="">
                </div>
                <div>
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" placeholder="email" required="required">
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" required="required">
                </div>
                <div>
                    <label for="password2">Confirm password</label>
                    <input type="password" id="password2" v-model="password2" required="required">
                    <p class="error" v-show="error">{{ error }}</p>
                </div>
                <div>
                    <input name="remember" type="checkbox">
                    <label for="checkbox">Remember me</label>
                </div>
                
                <div>
                    <v-btn @click="$emit('logged')" type="submit" color="blue" block elevation="2" rounded>Register</v-btn>
                    
                </div>
            </form>
            <v-divider></v-divider>
            <div class="my-4 modal-bottom">
                    <p>Already have an account? <v-btn flat @click="registerModal" >Signin.</v-btn></p>
                </div>
                    
            </div>    
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
        name:"",    
        email:'',
        loginemail:"",
        loginpassword:'',
        loginremember:'',    
        password: "",
        password2:"",
        remember:"",
        register:true,
        error:'',

        }
    },
    
    props:[],
    methods:{
        closeModal(){
            this.$emit('closeModal')
        },
        registerModal(e){
            e.preventDefault()
            this.register = !this.register
        },
        async onSubmit(e){
            e.preventDefault()
            const loginUserData = await axios.post("http://localhost:8008/user/login",{email:this.loginemail,password:this.loginpassword})
            sessionStorage.setItem("Token",loginUserData.data.Token)
            sessionStorage.setItem("_id",loginUserData.data._id)
            localStorage.setItem("user",loginUserData.data.name)
            this.$emit('logged')
            this.$router.go(0)
            
        },
       async authenticate(e){
            e.preventDefault()
            
            if (this.password !== this.password2) {
                this.error ="passwords do not match"
                setTimeout(()=>{this.error =""},2500)

            }else if(this.password.length< 6){
                this.error ="password is too short"
                setTimeout(()=>{this.error =""},2500)
            }
            else{
            const registerUserData = await axios.post("http://localhost:8008/user/",{name:this.name,email:this.email,password1:this.password,password2:this.password2})
            
            console.log("registered")
               
            }
            


        }
}
}
</script>

<style scoped>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    z-index: 999;
    
}
.fa-times-circle{
    float: right;
}
form {
    background: white;
    text-align: left;
    padding: 20px 60px;
    
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
    position: relative;
    cursor: pointer;
    background: #3e8afa;
    padding: 10px 20px;
    color: white;
    border-radius: 10px;
}

.error {
    color:#ff0062;
    margin-top: 10px;
    font-size: 0.8em;
}
h3{
    text-align: center;
}

</style>