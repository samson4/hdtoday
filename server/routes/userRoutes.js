const express = require("express")
const router = express.Router()
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const authRequired = require("../middleware/authRequired")

router.get("/",async(req,res)=>{
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
router.post('/', asyncHandler(async(req,res)=>{

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
            emial:user.emailAddress,
            Token:token(user._id)
        })
    }else{
        res.status(400)
        throw new Error("password is invalid.")
    }
    
})
// update profile
router.put("/profile",authRequired,asyncHandler(async (req,res)=>{
    try{
        // if(!req.body){ 
        //     res.json({message:""}) 
        // }
        const {Name,Email,Password1,Password2} = req.body
        if(!Name||!Email||!Password1||!Password2){
            res.status(400)
            throw new Error('Please include all fields')
        }
        const updatedProfile = await User.findByIdAndUpdate(req.user.id,{userName:Name,emailAddress:Email,password1:Password1,password2:Password2})
        if(updatedProfile){
            res.status(200).json(updatedProfile)
        }else{
            res.status(401)
            throw new Error('Update failed')
        }
        
    }catch(err){
        throw new Error(err)
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