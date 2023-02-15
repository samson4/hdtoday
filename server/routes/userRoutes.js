const express = require("express")
const router = express.Router()
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
var cors = require('cors')
const authRequired = require("../middleware/authRequired")

router.get("/",cors(),async(req,res)=>{
    const users = await User.find()
    res.json(users)
})
// Generate JWT token
const token = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}
// register user
router.post('/',cors(), asyncHandler(async(req,res)=>{

    const name=req.body.name
    const email=req.body.email
    const password1=req.body.password1
    const password2=req.body.password2

    if(!name || !email|| !password1|| !password2){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // match password1 and confirm password
    // TODO frontend authentication
    if(password1 !== password2){
        res.status(400)
        throw new Error('Passwords do not match!')
    }

    const existingEmail = await User.findOne({emailAddress:email})
   
    if(existingEmail){
        res.status(400)
        throw new Error("Email already exists.")
    }
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password1,salt)

    const user = await User.create({
        userName:name,
        emailAddress:email,
        password1:hashedPassword,
        password2:hashedPassword
    }) 

    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.userName,
            email:user.emailAddress,
            Token:token(user._id)
        })

    }else{
        res.status(400)
        throw new Error("Invalid data")
    } 
}))

// login user
router.post("/login",async(req,res)=>{
    try {
        const email = req.body.email
    const password = req.body.password
    if(!email || !password){
        res.status(400)
        throw new Error("Please include all fields")
    }

    const user = await User.findOne({emailAddress:email})
    // check if user exists
    if(!user){
        res.status(404)
       
        throw new Error("User Not Found")
    
    }
    // check for user password matchs hashed password
    if(await bcrypt.compare(password,user.password1)){
        res.json({
            _id:user.id,
            name:user.userName,
            email:user.emailAddress,
            Token:token(user._id)
        })
    }else{
        res.status(400)
        throw new Error("password is invalid.")
    }
        
    } catch (error) {
        console.log(error)
    }
    
    
})
// logout user
router.post("/logout",async(req,res)=>{
    try {
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
})
// update profile
router.put("/profile",authRequired,asyncHandler(async (req,res)=>{
   
        // if(!req.body){ 
        //     res.json({message:""}) 
        // }
        const {Name,Email} = req.body
        if(!Name||!Email){
            res.status(400)
            throw new Error('Please include all fields')
        }
        const updatedProfile = await User.findByIdAndUpdate(req.user.id,{userName:Name,emailAddress:Email}).exec()
        if(updatedProfile){
            res.status(200).json(updatedProfile)
        }else{
            res.status(401)
            throw new Error('Update failed')
        }
        
  

}))


// get my favorites
router.get("/favorite",authRequired,asyncHandler( async(req,res)=>{
    try{
       const {_id,userName,emailAddress,favorite} = await User.findById(req.user.id)
       res.status(200).json({
        id:_id,
        name:userName,
        email:emailAddress,
        favorites:favorite
       })
    }catch(err){
        console.error(err)
    }
    
}))


module.exports=router