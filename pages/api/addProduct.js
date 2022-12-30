import connect from "../../lib/mongodb";
import Product from '../../model/ProductSchema.js'

connect()

export default async function handler(req,res){
    try {
        const product = await Product.create(req.body);
        res.status(201).json({status:'product created successfully'})
        res.redirect('/dashboard')
        if(!product){
            return res.json({"code":'product not created'})
        }
    } catch (error) {
         res.status(400).json({status:'Not able to create a new product.'})
    }
}