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


/* GET
    /api/post   [protected] RETURNS ALL POSTS OF A USER
*/

async function getPostController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Token not provided , Unauthorized Access"
        })
    }

    let decoded = null

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status({
            message: "Invalid Token"
        })
    }

    const userId = decoded.id

    const posts = await  postModel.find({
        user: userId
    })

    res.status(200).json({
        message: "Post fetched Successfully",
        posts
    })
}

/* GET - /api/post/details/:postId  
RETURNS A DETAIL ABOUT SPECIFIC POST WITH THE ID , ALSO CHECKS WHETHER THE POST BELONGS TO THE USER THAT IS REQUESTING OR NOT 
*/

async function  getPostDetailController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: "Token not provided , Unauthorized Access"
        })
    }

    let decoded = null

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    const userId = decoded.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post){
        return res.status(404).json({
            message:"Post Not Found"
        })
    }

    const isValidUser = post.user.toString() === userId
    if(!isValidUser){
        return res.status(403).json({
            message: "Forbidden Content"
        })
    }
    return res.status(200).json({
        message: "Post Fetched Successfully.",
        post
    })

}

module.exports = {
    createPostController,
    getPostController,
    getPostDetailController
}