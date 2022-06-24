const jwt=require('jsonwebtoken');

// Assigning jwt token to the user...
// with user._id and user.email
exports.getToken= (user)=>{
    const token= jwt.sign({
        _id:user._id,email:user.email
    },process.env.SECRET,{
        // Expire Time
        expiresIn : "48h"
    }) 

    return token;
}

// Varifying jwt token...
exports.varifyToken=(req,res,next)=>{

    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({
            error:true,
            code : "JWT_NOT_FOUND",
        }); 
    }
    // If token format wrong
    if(!token.startsWith("Bearer ")){
        return res.status(401).json({
            error:true,
            code : "JWT_FORMAT_ERROR"
        });
    }

    const jwtVerify = jwt.verify(token.substring(7,token.length),process.env.SECRET);
    // Verifying jwt token
    if(jwtVerify){
        req.user=jwtVerify;
        next();
    }else{
        // If jwt verification failed
        return res.status(401).json({
            error:true,
            code : "UNAUTHORISED_USER",
        });
    }

}