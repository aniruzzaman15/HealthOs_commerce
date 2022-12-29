
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        unique:true
    },
    product_thumbnail:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    dateTime:{
        type:String,

    }
})

module.exports = mongoose.models.Product || mongoose.model('Product',productSchema)