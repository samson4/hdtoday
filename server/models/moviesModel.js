const mongoose = require("mongoose")

const movieSchema = mongoose.Schema(
    {
        Title:{
            type:String,
            required :true
        },
        Poster:{
            type:String,
            required:false
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
            enum:["Science Fiction", "Adventure", "Drama", "Action","None"],
            default:["None"]
        },
        Duration:{
            hours: Number,
            minutes: Number,
            seconds: Number,
            default:""
        },
        Casts:{
            type:[String],
            required:true,
            enum:["Timothée Chalamet", "Rebecca Ferguson", "Dave Bautista", "Stellan Skarsgård", "Charlotte Rampling","None"],
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
            enum:["Legendary Entertainment", "Framestore", "Double Negative (DNEG)", "Warner Bros. Pictures", "Villeneuve Films","None"],
            default:["None"]
        }
    }
)

module.exports = mongoose.model('Movie',movieSchema)