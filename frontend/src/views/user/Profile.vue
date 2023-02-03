<template>
  <p>Home / {{ breadcrumb }}</p>
</template>

<script>
export default {
    data(){
        return{
            breadcrumb:this.$route.name
        }
    },
    created(){
       console.log(this.$route)
    }
}
</script>

<style>

</style>