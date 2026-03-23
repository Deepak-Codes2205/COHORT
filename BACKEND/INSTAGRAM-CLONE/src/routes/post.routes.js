const express = require("express")
const postRouter = express.Router()
const userModel = require("../models/user.models")
const postController = require('../controllers/post.controller')
const multer = require('multer')

const upload = multer({ storage:multer.memoryStorage() })

/**  
 * /api/post/   
*/
postRouter.post("/", upload.single("Image"),postController.createPostController)


/* GET
    /api/post   [protected] RETURNS ALL POSTS OF A USER
*/
postRouter.get("/", postController.getPostController)


/* GET - /api/post/details/:postId  
RETURNS A DETAIL ABOUT SPECIFIC POST WITH THE ID , ALSO CHECKS WHETHER THE POST BELONGS TO THE USER THAT IS REQUESTING OR NOT 
*/
postRouter.get("/details/:postId", postController.getPostDetailController)



module.exports = postRouter