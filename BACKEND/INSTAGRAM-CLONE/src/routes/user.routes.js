const express = require("express")

const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const identifyUser = require("../middlewares/auth.middleware")
/** 
 * @route POST api/users/follow/:userId
 * @description Follow a user(Request)
 * @access Private
 */

userRouter.post("/follow/:username",identifyUser , userController.followUserController)

/** 
 * @route POST api/users/follow/requests
 * @description Show all follow requests
 * @access Private
 */

userRouter.get("/follow/requests",identifyUser, userController.getFollowRequests)


/** 
 * @route POST api/users/follow/requests/accept/:username
 * @description Accept a particular request
 * @access Private
 */

userRouter.patch("/follow/requests/accept/:username",identifyUser, userController.acceptFollowRequest)


/** 
 * @route POST api/users/follow/requests/reject/:username
 * @description Reject a particular request
 * @access Private
 */

userRouter.patch("/follow/requests/reject/:username",identifyUser, userController.rejectFollowRequest)


/** 
 * @route POST api/users/unfollow/:userId
 * @description Unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username",identifyUser , userController.unfollowUsercontroller)

module.exports = userRouter