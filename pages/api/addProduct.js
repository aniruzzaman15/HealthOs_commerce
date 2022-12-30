import connect from "../../lib/mongodb";
import ProductSchema from '../../model/ProductSchema.js'

connect()

export default async function handler(req,res){
    try {
        console.log(req)

        const product = await ProductSchema.create(req.body);
        console.log(product)
        // res.redirect('/dashboard')
        // if(!product){
        //     return res.json({"code":'product not created'})
        // }
    } catch (error) {
        // res.status(400).json({status:'Not able to create a new product.'})
    }
}