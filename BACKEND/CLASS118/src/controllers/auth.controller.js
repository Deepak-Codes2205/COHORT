
/**
 * user => 
 * {
 * username:{ type: String, required: true },
 * email:{ type: String, required: true, unique: true },
 * password:{ type: String, required: true }
 * }
 */

export async function registerUser(req, res, next) {
    res.status(201).json({
        message: "User registered successfully" 
    })
    
}


/* 
export async function registerUser(req, res, next) {
    try{
        const err = new Error("Password not strong enough")
        
    } catch (error) {
        error.status = 400
        next(error)
    }
}
*/