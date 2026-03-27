const mongoose = require('mongoose')


const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        dafault: ""
    },
    imgUrl: {
        type: String,
        required: [true, "ImageUrl is required for post creation"]
    },
    user: {
        ref: "users",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "UserId is required for post creation"]
    }
})

const postModel = mongoose.model("Posts",postSchema)

module.exports = postModel