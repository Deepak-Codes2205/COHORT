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

module.exports = postRouter