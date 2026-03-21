const express = require('express')
const postRouter = express.Router()
const postModel = require('..//models/post.model')
const bcrypt  = require('bcryptjs')
const Imagekit = require('@imagekit/nodejs')
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")

const imagekit = new Imagekit({
    privateKey: process.env.IMAGE_PRIVATE_KEY
})

async function createPostController(req,res){

    console.log(req.body,req.file)
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Token not provided, Unautherized access"
        })
    }
    let  decoded = null
    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "User not Authorized"
        })
    }
    console.log(decoded)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName: "Test",
        folder : "cohort-insta-clone-posts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decoded.id
    })
    res.status(201).json({
        message: "Post Created Successfully",
        post
    })

}
module.exports = {createPostController}