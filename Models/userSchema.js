
// import mongoose
const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    }
})

// model creation
const users=mongoose.model("users",userSchema)

module.exports=users