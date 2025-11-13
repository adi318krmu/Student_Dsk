const mongoose= require('mongoose')
const{ Schema , model }= require('mongoose')
const noteSchema= new Schema({
user :{
     type: mongoose.Schema.Types.ObjectId, 
     ref:'User',
     required:true,
},
title:{
    type :String,
    required: true,
    trim : true,
}
,
content:{
  type : String,
  required : true,

},
},

{ timestamps : true}
)

const Note= model('Note', noteSchema);
module.exports= Note;