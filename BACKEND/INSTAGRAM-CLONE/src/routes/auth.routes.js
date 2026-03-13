const express = require("express")
const userModel = require("../models/user.models")
const bcrypt = require("bcryptjs")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const authController = require('../controllers/auth.controller')

//CREATING API FOR REGISTERING : /api/auth/register
authRouter.post("/register",authController.registerController)

/* LOGIN API : /api/auth/login */
authRouter.post("/login",authController.loginController)

module.exports = authRouter