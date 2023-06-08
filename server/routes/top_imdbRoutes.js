const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({message:"Top IMDB Rating"})
})

module.exports=router