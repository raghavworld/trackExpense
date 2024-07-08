const asyncHandler = require('express-async-handler')
const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const nodemailer =require('nodemailer')
const speakeasy = require('speakeasy')

const usersControl ={

    //! register 
    register: asyncHandler(async(req,res)=>{
        // console.log(req.body);
        const {username,password,email} = req.body
        
        //!Validate body
        
        if(!username || !password || !email){
            throw new Error('All fields are mandatory')   
        }
        //!validate existing user
        const existingUser = await User.findOne({email}) 
        if(existingUser){
            throw new Error('User already exists')
        }
        
        //!Hash the password before saving to DB
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password,salt)         
        console.log("hashedpass: ",hashedPassword);
        
                //Save details to database
                await User.create({username,password:hashedPassword,email})
                .then((data)=>{
                    console.log({
                        id:data._id,
                        email:data.email,
                        username:data.username,
                        }) 
                    res.json({
                        id:data._id,
                        email:data.email,
                        username:data.username,
                        
                    })
                })
                .catch(e=>{
                    res.json({error:e})
                    console.log(e)
                })
      
    }),

    //! Login
    login: asyncHandler(async(req,res)=>{
        // console.log(req.body)
        const {email,password} = req.body
//!check all fields exists or not
        if(!email || !password){
           throw new Error('All fields are mandatory')
        }
        // check user exists ?
        const userExist = await User.findOne({email})
        if(!userExist){
            throw new Error('User does not exist')
        }
        // ! compare password 
        const match  = await bcrypt.compare(password,userExist.password)
        if(!match){
            throw new Error('Invalid credentials')
        }
        // generate login token for cookies
        const token = jwt.sign({id:userExist._id,username:userExist.username},'loginToken',{expiresIn:'30d'})


        res.json({
            message:'Login Successful',
            token,
            id:userExist._id,
            username:userExist.username,
        })
    
    }),

    // ! profile
    profile: asyncHandler(async(req,res)=>{

        //? id :66856f50a31f3b9300e7e94f
        // console.log('req: ' ,req.user);
        const userProf = await User.findById(req.user?.id)
        if(!userProf){
            throw new Error('User Profile does not exist')
        }
        res.json({
            message:'Profile Details',
            id:userProf.id,
            username:userProf.username,
            email:userProf.email
        })

    }),

    //! Forgot Password
    generateOtp: asyncHandler(async(req,res)=>{
        const {email} = req.body
        console.log(req.body.email)

        //! generate Verification code
        var secret =speakeasy.generateSecret({length:20})
        const token = speakeasy.totp({
            secret:'test_token',
            encoding:'base32'
        })
        console.log(token);
        
        //! Send Verification email
         let transporter = nodemailer.createTransport({
            host:'smtp.hostinger.com',
             
            port:465,
            secure:true,
            auth:{
                user:'raghavworld@travellazy.com',
                pass:'Raman11!!'
            }
         })

         let info = await transporter.sendMail({
            priority:'High',
            from:'"Instagram" <raghavworld@travellazy.com>',
            to:'nksah26497@gmail.com',
            subject:'Password Reset Successful',  
            text:`
            Hello ayur, 
            Your Instagram Password has been successfuly reset.
            If not changed by you please contact us atsupport@meta.com
            Regards,
            Meta Team.`

         })
         res.json({info})
         console.log('message sent: ',info)
        

    }),

    // ! Verify OTP
    verifyOtp:asyncHandler(async(req,res)=>{
        console.log(req.query)
        const otp = req.query?.otp

        if(!otp){
            res.json({message:'invalid otp'})
        }
        const otpVerify = speakeasy.totp.verify({
            secret:'test_token',
            encoding:'base32',
            token:otp,
            window:6
       
        })
        console.log('verify : ',otpVerify)
        res.json({'message':'otp verified'})


    }),
    // ! Update Password
    forgotPassword: asyncHandler(async(req,res)=>{
        // log req
        console.log(req.body)
        const {email,password} =req.body

        if(!email || !password){
            res.json('Try a valid input')
      }

        const oldPassword = await User.findOne({email})

        const compareOldPass = await bcrypt.compare(password,oldPassword.password)

        if(compareOldPass){
           throw new Error('Old Password cannot be same as new password')
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)
        const userUpdated = await User.findOneAndUpdate({email},{password:hashedPassword}) 
        
        console.log(userUpdated);
        res.json({message:'Password Updated',
            userUpdated
        })

    })





   


}
module.exports = usersControl