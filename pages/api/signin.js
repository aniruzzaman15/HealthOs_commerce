import connect from "../../lib/mongodb.js";
import User from '../../model/UserSchema.js'

connect()

export default async function handler(req,res){

    const {phone,password} = req.body
    const user = await User.findOne({phone,password})
    console.log('got you', user)
    if(!user){
        res.status(401).json({status:"Customer doesn't exist"})
    }
    else{
        res.status(200).json({status:'Successfully Signed in',data:user})
    }
}