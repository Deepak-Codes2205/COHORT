const express = require("express")
const bcrypt = require("bcryptjs")
const userModel = require("../models/user.models")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")

async function  registerController(req,res){
    const{username, email, password, bio, profileImage} = req.body

    //CHECKING WHETHER THE EMAIL OR USERNAME DOES EXISTS ALREADY
    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            { username },
            { email }
        ]
    })
    
    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User already exists" + (isUserAlreadyExists.email == email) ? "Email Already Exists" : "Username Already Exists"
        })
    }
    //HASHING PASSWORD
    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImage
    })


    /* User ka data hona chahiye
        or data unique hona chahiye */
    const token = jwt.sign({
        id: user._id,
        username: user.username
    }, process.env.JWT_SECRET,{expiresIn:"1d"})

    res.cookie("token",token)

    res.status(201).json({
        message: "User Registered Successfully",
        user:{
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
            
        }
    })

}

async function loginController(req,res){
    const {username,email,password} = req.body

    /* CAN LOGIN ON THE BASIS OF EITHER
    USERNAME AND PASSWORD 
    OR EMAIL AND PASSWORD */

    const user = await userModel.findOne({
        $or:[
            //CONDITIONS
            {
                username: username /* a */
            },
            {
                email: email /* undefined */ //or vice versa
            }
        ]
    })
    if(!user){
        return res.status(401).json({
            message: "User Not Found"
        })
    }
    
    const isPasswordValid = await bcrypt.compare(password,user.password )
     
    if(!isPasswordValid){
        return res.status(401).json({
            message: "Incorrect Password"
        })
    }
    const token = jwt.sign(
        { 
            id: user._id,
            username: user.username
        },process.env.JWT_SECRET,{expiresIn:"1d"}
    )

    res.cookie("token",token)
    
    res.status(201).json({
        message: "User Loggined Successfully",
        user: {
            username : user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}