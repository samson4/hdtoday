const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.json({message:"Cast Name"})
})

module.exports=router
