<template>
  <v-div>
  <v-breadcrumbs>Home{{ previous }}</v-breadcrumbs>
    <v-img  src="/download.jpg"><v-card-title> {{slug}}</v-card-title></v-img>
    
  <h1></h1>
  <v-card>
    <v-card-title> {{slug}}</v-card-title>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, voluptatum. Possimus facilis voluptas velit assumenda, similique veritatis unde vel quo atque debitis quam iste minus laudantium aperiam, quis illo consequuntur. Doloribus, necessitatibus? Maxime saepe laudantium enim optio ipsam, voluptatum voluptate eaque commodi quae repudiandae hic fuga quasi, beatae aliquid veniam?</p>
    <br>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut cum inventore pariatur nulla tempora ipsam atque adipisci obcaecati debitis vel incidunt eius, ad deserunt corrupti? Alias quia quo dolorem mollitia!</p>
  </v-card>
  {{ name }}
  </v-div>


 
</template>

<script>
export default {
  name:"movie-detail",
  props:['slug'],
  data(){
    return{
      previous:this.$route.path
    }
  },
  mounted(){
    console.log(this.$route)
  }
}

</script>

<style>
img{
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>