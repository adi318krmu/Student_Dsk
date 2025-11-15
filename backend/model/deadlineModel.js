const mongoose= require('mongoose')

const {Schema , model}=require('mongoose')

const DdlineSchema= new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },

    title:{
     type: String,
     required : true
    },
  description:{
    type : String,
    required: true
  },
  deadlineTime:{
    type: Date,
    required: true
  },

  reminderSent:{
    type:Boolean,
    default: false
  }

});

const deadline= model('Deadline', DdlineSchema);
module.exports= deadline;