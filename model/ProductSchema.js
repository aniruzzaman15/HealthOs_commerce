
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
    date:{
        type:String,
    },
    product_qty:{
        type:String,
    },
    product_id:{
        type:String,
    }
})

module.exports = mongoose.models.Product || mongoose.model('Product',productSchema)