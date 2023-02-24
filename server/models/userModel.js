const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        userName:{
            type:String,
            required :true
        },
        emailAddress:{
            type:String,
            unique:true,
            required:true
        },
        password1:{
            type:String,
            required:true
        },
        password2:{
            type:String,
            required:true
        },
        favorite:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Movie',
            default:null
        }]
    }
)

module.exports = mongoose.model("User",userSchema)