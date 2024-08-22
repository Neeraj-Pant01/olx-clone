const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    productDesc:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        type:Array,
        required:false
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    neighbourhood:{
        type:String,
        required:true
    },
    sold:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})

module.exports = mongoose.model("products", productSchema)