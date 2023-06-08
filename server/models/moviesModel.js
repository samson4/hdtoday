const mongoose = require("mongoose")

const movieSchema = mongoose.Schema(
    {
        Title:{
            type:String,
            required :true
        },
        Tag:{
            type:[String],
            enum:["Movie","TV"],
        },
        Poster:{
            type:String,
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
            enum:["Science Fiction","Sci-Fi & Fantasy","Horror","Animation","Kids", "Adventure", "Drama", "Action","None"],
            default:["None"]
        },
        Seasons:{
            type:Number,
            required:false,
            default:1
        },
        Episodes:{
            type:String,
            default:"",
            required:false
            
        },
        Duration:{
            hours: Number,
            minutes: Number,
            seconds: Number,
            default:"",
            required:false
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
            enum:["Legendary Entertainment", "Framestore", "Double Negative (DNEG)","Good Banana","PlayStation Productions", "Naughty Dog", "HBO", "Sony Pictures Television", "The Mighty Mint", "Word Games", "Warner Bros. Pictures", "Villeneuve Films", "Marvel Studios", "Walt Disney Studios", "Revolution Sun Studios", "Television 360", "Generator Entertainment", "Bighead Littlehead","Williams Street", "Harmonius Claptrap", "Justin Roiland's Solo Vanity Card Productions", "Starburns Industries","None"],
            default:["None"]
        },
       
  
    }
)

module.exports = mongoose.model('Movie',movieSchema)