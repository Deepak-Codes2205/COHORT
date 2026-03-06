const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const authRouter = express.Router();
const crypto = require("crypto")

authRouter.post('/register', async(req,res)=>{
    const{name,email,password} = req.body

    //REGISTERING USER
    //CHECKING WHETHER A USERS ALREADY EXIST WITH THE SIMILAR EMAIL ADDRESS 
    const isUserAlreadyExsits = await userModel.findOne({email})
    if(isUserAlreadyExsits){
        return res.status(400).json({
            message: "User already exists with this email address"
        })
    }
    const hash = crypto.createHash("md5").update(password).digest("hex")
    /* api/auth/register */
    const user = await userModel.create({
        name,email,password:hash
    })

    //CREATING TOKEN - we can pass more things along with id for example:- email,name,password
    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET
    )

    //SETTING/PUTTING THE TOKENS WITHIN THE COOKIES (CLIENT'S SITE)
    res.cookie("jwt_token",token)

    res.status(201).json({
        message:"User registerd successfully",
        user,
        token
    })

})

// /api/auth/protected 
authRouter.post("/protected", (req,res)=>{
    console.log(req.cookies)

    res.status(200).json({
        message:"This is protected route"
    })
})


/* LOGIN-API : /api/auth/login */
authRouter.post("/login", async(req,res)=>{
    const {email,password} = req.body
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            message:"User not found with this email address"
        })
    }
    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex") 
    if(!isPasswordMatched){
        return res.status(404).json({
            message:"Invalid password"
        })
    }

    const token = jwt.sign(
        {
            id:user._id,
        }
        ,process.env.JWT_SECRET)

    res.cookie("jwt_token",token)
    res.status(200).json({
        message:"User logged in",
        user
    })
 
})
module.exports = authRouter