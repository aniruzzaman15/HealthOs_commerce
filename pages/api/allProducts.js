import connect from "../../lib/mongodb";
import Product from '../../model/ProductSchema.js'

connect()

export default async function handler(req,res){
    console.log('ginto.....ot you')
    const products = await Product.find()
    console.log('got you', products)
    if(!products){
        return res.json({status:'Not able to find the products'})
    }
    else{
        // res.redirect('/dashboard')
        console.log('found no products')

    }
}