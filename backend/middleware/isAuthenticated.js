import jwt from "jsonwebtoken";
import User from "../models/login";

export const isAuthen=async(req,res)=>{
    try{
       const token=req.headers.token;
       const decoded=jwt.verify(token.process.env.JWT_SECRET);
       const user=await User.findBYId(decoded.userId).select("-password");

       if(!user)
       {
        return res
        .status(404)
        .json({message:"user not found", success:false});
       }
       req.user=user;
       next();
    } catch(error)
    {
        console.log(error.message);
        return res
        .status(500)
        .json({message:"eror.message",success:false})
    }
}