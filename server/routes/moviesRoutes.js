const express = require('express')
const Movie = require('../models/moviesModel')
const { param } = require('./homeRoutes')
const router = express.Router()


router.get('/',async(req,res)=>{
    const movies = await Movie.find()
    res.json(movies)
})
router.get('/:id',async(req,res)=>{
    const movie = await Movie.findById(req.params.id)
    if(!movie){
        res.status(400)
        throw new Error("Movie Not Found")
    }
    res.json(movie)
})
router.post('/',async(req,res)=>{
    try{
        const movie = await Movie.create({
            Title :req.body.Title,
            Poster : req.body.Poster,
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

const multer = require("multer")
const path = require('path')


const storage = multer.diskStorage({
    destination:'D:/vue/hdtoday-clone/frontend/public',
    filename:(req,file,next)=>{
        next(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage:storage
})

router.post("/upload",upload.single('poster'),async(req,res)=>{
    const fileName = req.file.filename
    console.log(req.file)
    try{
        const movie = await Movie.create({
            Title :req.body.Title,
            Poster : `/${fileName}`,
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

module.exports = router