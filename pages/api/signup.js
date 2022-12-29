import connect from "../../lib/mongodb";
import User from '../../model/UserSchema.js'

connect()

export default async function handler(req,res){
    try {


        const user = await User.create(req.body);
        console.log(user)
        res.redirect('/')
        if(!user){
            return res.json({"code":'User not created'})
        }
    } catch (error) {
        res.status(400).json({status:'Not able to create a new user.'})
    }
}