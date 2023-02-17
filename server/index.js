const express = require("express")
const dotenv = require("dotenv").config()
const errorHandler = require('./middleware/errorMiddleware')
const cors = require("cors")

const connectDB = require("./config/db")

connectDB()
const PORT = process.env.PORT || 5000
const app = express()



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/home",require('./routes/homeRoutes'))
app.use("/movie",require('./routes/moviesRoutes'))
app.use("/tv-show",require('./routes/tv_showRoutes'))
app.use("/top-imdb",require('./routes/top_imdbRoutes'))
app.use("/user",require('./routes/userRoutes'))

app.use(errorHandler)





app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})