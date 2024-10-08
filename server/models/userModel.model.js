const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        // unique:true
    },
    password:{
        type:String
    },
    mobile:{
        type:String,
        // unique:true
    }
    
},{
    timestamps:true
})

module.exports = mongoose.model("users",userSchema)