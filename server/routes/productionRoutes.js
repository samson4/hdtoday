const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({message:"Production Name"})
})

module.exports=router