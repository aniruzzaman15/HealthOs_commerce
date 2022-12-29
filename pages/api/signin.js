import connect from "../../lib/mongodb.js";
import User from '../../model/schema.js'

connect()

export default async function handler(req,res){

    const {phone,password,full_name} = req.body
    const user = await User.findOne({phone,password,full_name})
    if(!user){
        return res.json({status:'Not able to find the user'})
    }
    else{
        res.redirect('/home')
    }
}