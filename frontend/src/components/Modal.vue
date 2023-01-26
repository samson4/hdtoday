<template>
  <div class="backdrop" >
    <div class="modal">
        <div class="login-modal">
            <h3>Welcome Back<i class="fa fa-times-circle" @click="closeModal"></i></h3>
            
            <img src="/vue/hdtoday-clone/frontend/src/assets/logo-square.png" alt="">
            <form action="" @submit="onSubmit">
                <div>
                    <label for="emial">EMAIL ADDRESS</label>
                    <input type="email" id="email" v-model="email" placeholder="name@email.com">
                </div>
                <div>
                    <label for="password">PASSWORD</label>
                    <input type="password" id="password" v-model="password" placeholder="Password" required="required">
                </div>
                <div>
                    <input name="remember" type="checkbox" v-model="remember" id="remember">
                    <label for="checkbox">Remember me</label>
                </div>
                
                <div>
                    <v-btn @click="$emit('logged')" type="submit" color="blue" block elevation="2" rounded>Log in</v-btn>
                    
                </div>
                
                
                <div class="my-4">
                    <p>Don't have an account? <a @click="registerModal" href="">Register here.</a></p>
                </div>
                
            </form>

        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
        email:'',
        password: "",
        remember:false
        }
    },
    props:[],
    methods:{
        closeModal(){
            this.$emit('closeModal')
        },
        registerModal(){
       
        },
        onSubmit(e){
            e.preventDefault()
        
    },
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
    background: rgba(0,0,0,0.5);
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
</style>