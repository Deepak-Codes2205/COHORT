const express = require('express')
const postRouter = express.Router()
const postModel = require('..//models/post.model')
const bcrypt  = require('bcryptjs')
const Imagekit = require('@imagekit/nodejs')
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken")
const likeModel = require('..//models/like.model')
const imagekit = new Imagekit({
    privateKey: process.env.IMAGE_PRIVATE_KEY
})

async function createPostController(req,res){

    console.log(req.body,req.file)

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer),'file'),
        fileName: "Test",
        folder : "cohort-insta-clone-posts"
    })

    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
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

    const userId = req.user.id

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


    const userId = req.user.id
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


/*
*/
async function likePostController(req,res) {
    const username = req.user.username
    const postId = req.params.postId

    const postExists = await postModel.findById(postId)
    if(!postExists){
        return res.status(400).json({
            message: "Post not Found"
        })
    }

    const like = await likeModel.create({
        post: postId,
        user: username
    })
    res.status(201).json({
        message: "Post liked Successfully",
        like
    })

}
module.exports = {
    createPostController,
    getPostController,
    getPostDetailController,
    likePostController
}