const express = require("express")
const Movies = require("../models/moviesModel")
const router = express.Router()

router.get('/',async(req,res)=>{
    try{
    const tv_shows = await Movies.find({}).select()
    console.log(tv_shows)
    res.json(tv_shows)
    }catch(error){
        console.log(error)
    }
    
})



module.exports=router