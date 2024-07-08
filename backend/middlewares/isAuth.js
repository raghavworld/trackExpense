const jwt  = require("jsonwebtoken");

const isTokenValid = async(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
     if(!token){
        res.status(401).json({message:"Unauthorized"})
    }
    const tokenData= jwt.verify(token,'loginToken',(err,decoded)=>{
        if(err){
            throw new Error(err)
            
        }else {
            return decoded
        }
    })
    if(!tokenData){
        res.json({message:"Unauthorized"})
    }

    req.user = tokenData
    next()    

}
module.exports = isTokenValid