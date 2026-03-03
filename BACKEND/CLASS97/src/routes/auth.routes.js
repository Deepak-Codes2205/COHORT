const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const authRouter = express.Router();

authRouter.post('/register', async(req,res)=>{
    const{name,email,password} = req.body


    //CHECKING WHETHER A USERS ALREADY EXIST WITH THE SIMILAR EMAIL ADDRESS
    const isUserAlreadyExsits = await userModel.findOne({email})
    if(isUserAlreadyExsits){
        return res.status(400).json({
            message: "User already exists with this email address"
        })
    }

    /* api/auth/register */

    const user = await userModel.create({
        name,email,password
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

module.exports = authRouter