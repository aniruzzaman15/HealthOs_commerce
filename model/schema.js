import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    full_name:{
        type:String,
    }
})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)