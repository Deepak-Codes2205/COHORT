const express = require("express")
const noteModel = require("./models/notes.models.js")

const app = express()

//Middleware
app.use(express.json())

/* POST/notes
- req.body =>{title, description}
*/
app.post("/notes", async (req, res)=>{
    const {title, description} = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message:"Note created successfully",
        note
    })
})

/* GET/notes
fetch all the notes data */

app.get("/notes", async (req,res)=>{
    const note = await noteModel.find()
    // find() return data in terms of array of objects
    res.status(200).json({
        message:"Note fetched Succesfully",
        note
    })
})
module.exports = app