const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Successfully Connected to Database")
    })
}

module.exports = connectToDB