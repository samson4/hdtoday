const express = require('express')
const Movie = require('../models/moviesModel')
const { param } = require('./homeRoutes')
const router = express.Router()


router.get('/',async(req,res)=>{
    const movies = await Movie.find()
    res.json(movies)
})
router.post('/',async(req,res)=>{
    try{
        const movie = await Movie.create({
            Title :req.body.Title,
            Description :req.body.Description,
            Released :req.body.Released,
            Genre :req.body.Genre,
            Duration :req.body.Duration,
            Casts :req.body.Casts,
            Country :req.body.Country,
            Production :req.body.Production
        })
        res.status(200).json(movie)

    }catch(err){
        throw new Error(err)
    }
})
router.put('/:id',async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id)
        if(!movie){
            res.status(400)
            throw new Error("Movie Not Found")
        }
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json(updatedMovie)
    }catch(err){
        console.log(err)
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id)
        if(!movie){
            res.status(400)
            throw new Error("Movie Not Found")
        }
        
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json(`deleted movie ${req.params.id}`)

    }catch(err){

    }
})

module.exports = router