const Deadline= require('../model/deadlineModel')


// create a deadline with title and deadline
const createDdln= async(req , res)=>{
    try{

        const {title , description , deadlineTime}= req.body;
  
        if(!title|| ! deadlineTime){
            return res.status(400).json({message:"All fields are required"})
        }

        const dedln= await Deadline.create({
            user: req.user.id,
            title,
            description,
            deadlineTime
        })

        return res.status(200).json(dedln);

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

// get the deadline
const getDeadline= async (req, res)=>{
    try{
const deadlines= await Deadline.find({user:req.user.id}).sort('deadlineTime')

return res.status(200).json(deadlines)
    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}

module.exports={createDdln, getDeadline}


