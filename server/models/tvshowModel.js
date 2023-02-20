const mongoose = require('mongoose')


const tvshowSchema = mongoose.Schema({
    Title:{
        type:String,
        required :true
    },
    Poster:{
        type:String,
        required:false
    },
    Quality:{
        type:String,
        enum:["HD","TS"],
        default:"HD"
    },
    Description:{
        type:String,
        default:""
    },
    Released:{
        type:Date,
        default:null
    },
    Genre:{
        type:[String],
        required:true,
        enum:["Science Fiction","Horror","Animation","Kids", "Adventure", "Drama", "Action","None"],
        default:["None"]
    },
    Seasons:{
        type:Number,
        default:1
    },
    Casts:{
        type:[String],
        required:true,
        default:["None"]

    },
    Country:{
        type:[String],
        required:true,
        enum:["Canada", "Hungary", "United Kingdom", "United States of America", "Jordan", "Norway", "United Arab Emirates","None"],
        default:["None"]
    },
    Production:{
        type:[String],
        required:true,
        enum:["Legendary Entertainment", "Framestore", "Double Negative (DNEG)", "Warner Bros. Pictures", "Villeneuve Films", "Marvel Studios", "Walt Disney Studios","None"],
        default:["None"]
    }
}) 