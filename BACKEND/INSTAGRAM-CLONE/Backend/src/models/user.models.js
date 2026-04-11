const mongoose = require('mongoose')

const userScheme = new mongoose.Schema({
    username:{
        type: String,
        unique:[true,"Username already exists"],
        required:[true,"Username is required"]
    },
    email:{
        type: String,
        unique:[true,"Email already exists"],
        required:[true,"Email is required"]
    },
    password:{
        type: String,
        required:[true,"Password is required"],
        select: false
    },
    bio: String,
    profileImage : {
        type: String,
        default: "https://ik.imagekit.io/nr99q3eb6/DefaultProfileImage.webp"

    }

})

const userModel = mongoose.model("users",userScheme)

module.exports = userModel