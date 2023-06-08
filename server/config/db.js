const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://samson:SAMson347@clone.jgyi0ys.mongodb.net/hdtoday?retryWrites=true&w=majority")
        console.log(`mongo db connected on ${connect.connection.host}`)
    }catch(err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB