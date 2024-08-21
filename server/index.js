const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors");
const authRoute = require("./routes/auth.route")
const productRoute = require("./routes/product.route");
const connectToDatabase = require("./database/connection");

const app = express()
app.use(express.json())
app.use(cors())


app.use('/api/v1/auth',authRoute)
app.use('/api/v1/products',productRoute)


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    connectToDatabase()
    console.log(`server is running at the ${PORT}`)
})