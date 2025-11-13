const Note= require('../model/notesModel')

// to create a note 
const createNote= async ( req, res)=>{
   try{
    const {title , content}= req.body;
   if(! title || !content){
    return res.status(400).json({message:"All fields are required"})
   }
   
   const newNote = await Note.create({
    user : req.user._id,
    title,
    content
   })
     
   return res.status(200).json(newNote);
    }catch(error){
     return res.status(500).json({message:error.message})
}
}


// to delete a note
const deleteNote= async ( req, res)=>{
   try{
    const notes= await Note.findById(req.params.id)

    if(!notes){
        return res.status(403).json({message:"Not found"})
    }

    if(notes.user.toString()!=req.user._id.toString()){
        return res.status(403).json({message:"Unauthorized"})
    }
    await Note.deleteOne({_id: req.params.id});
    return res.status(200).json({message:"Note deleted"})

    
    }catch(error){
     return res.status(500).json({message:error.message})
}
}


// to update the note
const updateNote= async ( req, res)=>{
   try{
    const notes= await Note.findById(req.params.id)

    if(!notes){
        return res.status(403).json({message:"Not found"})
    }

    if(notes.user.toString()!=req.user._id.toString()){
        return res.status(403).json({message:"Unauthorized"})
    }

    const updated= await Note.findByIdAndUpdate( req.params.id, req.body,{new : true})
    
    return res.status(200).json(updated)

    
    }catch(error){
     return res.status(500).json({message:error.message})
}
}

// to get the note
const getNote= async ( req, res)=>{
   try{
     
    const notes = await Note.find({user:req.user._id}).sort({createdAt:-1})
     return res.status(200).json(notes);

    
    }catch(error){
     return res.status(500).json({message:error.message})
}
}


module.exports={createNote, getNote, deleteNote, updateNote}