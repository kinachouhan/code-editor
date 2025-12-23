import { User } from "../modules/userModules.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUp = async(req , res) =>{
      try {
         
        const {userName , email , password} = req.body

       

        if(!userName || !email || !password){
           return   res.status(401).json("All fields are required")
        }

        const user = await User.findOne({userName})

        if(user){
           return  res.status(401).json("User is alreday exist")
        }

        const hashedPassword = await bcrypt.hash(password , 10)

        const newUser = await User.create({
            userName,
            password: hashedPassword,
            email
        })

        const tokenData = {
             _id :  newUser._id
        }

        const token = jwt.sign(tokenData , process.env.SECRET_KEY , {expiresIn : process.env.EXPIRY_KEY})
        
       res.status(200)
       .cookie("token", token , {
          expires: new Date(Date.now() + process.env.COOKIE_EXPIRY* 24*60*60*1000),
          httpOnly: true,
          secure: false,
          sameSite: "lax"
       })
       .json({
         success: true,
         newUser,
         token
       })


      } catch (error) {
         console.log(error)
      }
}


export const login = async(req , res)=>{

    const {userName , password} = req.body

    if(!userName || !password) {
        return res.status(401).json("Username and password are required")
    }

    const user = await User.findOne({userName})

    if(!user){
         return res.status(401).json("Username and password is invalid")
    }

    const isValidPassword = await bcrypt.compare(password , user.password)

    if(!isValidPassword){
         return res.status(401).json("Username and passowrd is invalid")
    }

    const tokenData = {
         _id : user._id
    }

    const token = jwt.sign(tokenData , process.env.SECRET_KEY , {expiresIn: process.env.EXPIRY_KEY})

    res.status(200)
    .cookie("token", token , {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRY * 24*60*60*1000),
        httpOnly: true,
        sameSite: "lax",
        secure: false
    })
    .json({
        success: true,
        user,
        token
    })
}


export const logout = (req , res)=>{
     
    res.status(200)
    .cookie("token", "" , {
        expires: new Date(0),
        httpOnly: true
    })
    .json({
        success: true,
        message: "Logged Out successfully"
    })
}