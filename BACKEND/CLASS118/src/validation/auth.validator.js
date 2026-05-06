import {body, validationResult} from "express-validator"

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if(errors.isEmpty()) {
        return next()
    }       
    res.status(400).json({
        errors: errors.array()
    }) 
}


export const registerValidation = [
    body("username").isString().withMessage("Username must be a string"),
    body("email").isEmail().withMessage("Email must be valid"),
    //body("password").isLength({ min: 8, max:12}).withMessage("Password must be 8-12 characters long"),
    //body("userid").isMongoId().withMessage("User ID must be a valid MongoDB ObjectId"),
    
    body("password").custom((value, {req}) => {
        if(value.length < 8 || value.length > 12) {
            throw new Error("Password must be 8-12 characters long")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
        if(!passwordRegex.test(value)) {
            throw new Error("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
        }
        return true
    }).withMessage("Password must be 8-12 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
    validate
]