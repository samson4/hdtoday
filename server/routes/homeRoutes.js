const express = require("express")
const router = express.Router()
const Movie = require("../models/moviesModel")

router.get('/',async(req,res)=>{
    const movies = await Movie.find()
    res.json(movies)
})

module.exports=router