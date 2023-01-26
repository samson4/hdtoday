const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const authRequired = async(req,res,next)=>{
    let token
    
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            const authHeader = req.headers['authorization']
            token = authHeader.split(' ')[1]
           
            // verify token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            
            // Get user from the token
            req.user = await User.findById(decoded.id)
            next()
        }catch(err){
            console.log(err)
            res.status(401)
            throw new Error('Not Authorized')
        }
    }
    if(!token){
        throw new Error('Not authorized, No Token')
    }
}

module.exports = authRequired