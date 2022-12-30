import connect from "../../lib/mongodb";
import Product from '../../model/ProductSchema.js'

connect()

export default async function handler(req,res){

    const products = await Product.find({})
    console.log('got you', products)
    if(!user){
        return res.json({status:'Not able to find the products'})
    }
    else{
        // res.redirect('/dashboard')
    }
}