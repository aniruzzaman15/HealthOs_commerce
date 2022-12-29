import connect from "../../lib/mongodb.js";
import User from '../../model/UserSchema.js'

connect()

export default async function handler(req,res){

    const {phone,password} = req.body
    const user = await User.findOne({phone,password})
    console.log('got you', user)
    if(!user){
        return res.json({status:'Not able to find the user'})
    }
    else{
        res.redirect('/dashboard')
    }
}