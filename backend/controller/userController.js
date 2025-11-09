const User=require('../model/userModel')
const bcrypt= require('bcrypt')
const jwt=require('jsonwebtoken')

// generating token 
const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN || '1d',
    })
}

// registeration of user 
const registerUser= async(req , res)=>{
    try{
const{name , email , password}= req.body;

if(!name || ! email || !password){
    return res.status(400).json({message:"all fields are required"})
}

const isExist= await User.findOne({email});
if(isExist){
    return res.status(400).json({message:"All fields are required"})
}
 
// hashing the password 
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password,salt )

const user = await User.create({
    name , 
    email, 
    password : hashPassword
})

const token=generateToken(user._id);
 return res.status(200).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}



// login of  user 

const loginUser= async(req , res)=>{
    try{
      
        const {name , email , password}= req.body;
        if( !name||! email || ! password){
            return res.status(400).json({message:"All fields are require"})
        }

         const user = await User.findOne({email})
         if(!user){
            return res.status(400).json({message:"Invalid User"})
         }

         const isMatch=await bcrypt.compare(password, user.password);
         if(!isMatch){
            return res.status(400).json({message:"Wrong password"
                
            });
         }
const token=generateToken(user._id);
         return res.status(200).json({message:"Login succesfully",
            token,
                user:{
                    id:user._id,
                    name:user.name,
                    email:user.email,
                   
                }
                
         })

    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}
module.exports={loginUser, registerUser}