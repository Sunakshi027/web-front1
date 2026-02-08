import jwt from "jsonwebtoken";

export const generateId=(userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET,{expresIn:"7d"});
}