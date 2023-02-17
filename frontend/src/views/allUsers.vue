<template>
    <v-container>
      <v-div>
        
        <form enctype="multipart/form-data" @submit="uploadMovie()">
                
                    <label for="poster">Poster</label>
                    <input type="file" name="poster" @change="selectfile">
                
               
                    <label for="Title">Title</label>
                    <input type="text" v-model="Title">

                    <label for="Description">Description</label>
                    <input type="text" v-model="Description">

                    <label for="Released">Released</label>
                    <input type="text" v-model="Released">

                    <label for="Duration">Duration</label>
                    <input type="text" v-model="Duration">

                    <label for="Genre">Genre</label>
                    <select name="" id="" v-model="Genre">
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Drama">Drama</option>
                        <option value="Action">Action</option>
                        <option value="Biography">Biography</option>
                        <option value="Crime">Crime</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Animation">Animation</option>
                        <option value="Kids">Kids</option>
                    </select>

                    <label for="Country">Country</label>
                    <select name="" id="" v-model="Country">
                        <option value="United States of America">United States of America</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia ">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="China">China</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="France">France</option>
                        <option value="India">India</option>
                    </select>
                    <label for="Production">Production</label>
                    <select name="" id="" v-model="Production">
                        <option value="Marvel Studios">Marvel Studios</option>
                        <option value="Walt Disney Studios">Walt Disney Studios</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>


                    <label for="Casts">Casts</label>
                    <input type="text" v-model="Casts">
                

                    <label for="quality">Quality</label>
                    <select name="" id="" v-model="Quality">
                        <option value="HD">HD</option>
                        <option value="TS">TS</option>
                    </select>
            <button type="submit">Submit</button>
        </form>
      </v-div> 
      <v-divider></v-divider> 
    <v-div>
    <v-div>
    </v-div>
</v-div>
      <v-divider></v-divider>
            <p>{{ Poster }}</p>
            <p>{{ Title}}</p>
            <p>{{ Description }}</p>
            <p>{{ Released }}</p>
            <p>{{ Genre }}</p>
            <p>{{ Duration }}</p>
            <p>{{ Country }}</p>
            <p>{{ Casts }}</p>
            <p>{{ Production }}</p>
            <p>{{ Quality }}</p>
      
        

  
</v-container>

</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            users:[],
            Poster:'',
            Title:'',
            Description:'',
            Released:'',
            Genre:'',
            Duration:'',
            Country:'',
            Casts:'',
            Production:'',
            Quality:''
        }
    },
    created(){
        this.getUsers()
        
    },
    methods:{
        selectfile(e){
            // this.Poster = this.$refs.file.poster[0]
           this.Poster = e.target.files[0]
           console.log(this.Poster)
            
        },
        async getUsers(){
            const payload =await axios.get("http://localhost:8008/user/")
            this.users= payload.data
            console.log(payload.data)
        },
        async uploadMovie(){
             fd = {
                Poster:this.Poster,
                Title:this.Title,
                Description:this.Description,
                Quality:this.Quality,
                Released:this.Released,
                Genre:this.Genre,
                Duration:this.Duration,
                Country:this.Country,
                Casts:this.Casts,
                Production:this.Production
            }

            const payload = await axios.post("http://localhost:8008/movie/upload",fd)
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