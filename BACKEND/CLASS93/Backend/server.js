// SERVER START KRNA
// DATABASE SE CONNECT KRNA
require('dotenv').config()
const app = require("./src/app.js")

const connectToDB=require("./src/config/database.js")

connectToDB()


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})