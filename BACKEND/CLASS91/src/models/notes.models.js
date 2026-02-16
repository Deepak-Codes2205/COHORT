const mongoose = require("mongoose")


//Schema
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

//Model

const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel