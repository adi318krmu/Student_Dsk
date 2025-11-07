const {Schema, model}= require('mongoose')

const userSchema= new Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50
    },
      email:{
        type: String,
        required: true,
        maxlength: 50
    },

    password:{
   type : String,
   require: true,
   maxlength: 6
    }
})

const UserModel = model("User", userSchema);
module.exports=UserModel;