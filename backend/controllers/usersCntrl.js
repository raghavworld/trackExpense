const asyncHandler = require('express-async-handler')


const usersControl ={

    //! register 
    register: asyncHandler(async(req,res)=>{
        res.json({message:'register'}) })
    //! Login
    
    // ! profile
   


}
module.exports = usersControl