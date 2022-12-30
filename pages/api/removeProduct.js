import connect from "../../lib/mongodb";
import Product from '../../model/ProductSchema.js'

connect()

export default async function handler(req,res){
    try {

        let result = await Product.findOneAndRemove({ product_id: req.body.product_id })
        if(result) res.status(200).json({status:'product deleted successfully'})

    } catch (error) {
        //
        console.log("couldn't process request")
    }
}