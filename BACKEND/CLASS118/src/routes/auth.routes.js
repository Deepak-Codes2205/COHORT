import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.js";
import { registerValidation } from "../validation/auth.validator.js"


const authRouter = Router()

/**
 * /api/auth/register  - POST
 * Request body: { username: string, password: string }
 * Response: 201 Created on success, 500 Internal Server Error on failure
 */
authRouter.post("/register", registerValidation, registerUser)

export default authRouter 