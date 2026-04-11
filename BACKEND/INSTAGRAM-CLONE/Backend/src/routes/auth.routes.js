const express = require("express")
const userModel = require("../models/user.models")
const bcrypt = require("bcryptjs")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const authController = require('../controllers/auth.controller')
const identifyUser = require("../middlewares/auth.middleware")


/** 
 * CREATING API FOR REGISTERING : /api/auth/register
**/
authRouter.post("/register", authController.registerController)

/**
 *  LOGIN API : /api/auth/login 
**/
authRouter.post("/login", authController.loginController)


/**
 * @route GET  /api/auth/get-me
 * @description Get's the currently logged in user's information
 * @access Private
 */
authRouter.get("/get-me", identifyUser, authController.getMeController)


module.exports = authRouter