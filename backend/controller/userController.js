const User=require('../model/userModel')
const bcrypt= require('bcrypt')

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

return res.status(200).json(user)
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}



// login of  user 

const loginUser= async(req , res)=>{
    try{
      
        const {name , email , password}= req.body;
        if( ! email || ! password){
            return res.status(400).json({message:"All fields are require"})
        }

         const user = await User.findOne({email})
         if(!user){
            return res.status(400).json({message:"Invalid User"})
         }

         const isMatch=await bcrypt.compare(password, user.password);
         if(!isMatch){
            return res.status(400).json({message:"Wrong password"});
         }

         return res.status(200).json({message:"Login succesfully"})

    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}
module.exports={loginUser, registerUser}