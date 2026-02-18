require("dotenv").config()

const app = require('./src/app.js')
const mongoose = require("mongoose")
const connectToDB = require("./src/config/database.js")

connectToDB()

app.listen(3000,()=>{
    console.log("Server is running with port 3000")
})