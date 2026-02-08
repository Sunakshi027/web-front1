import User from "../models/login";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import { generateId } from "../Utils/generateToken";
import cloudinary from "../Utils/cloudinary";

// create api logic
// 1. create post  logic
// user signin 
export const registeruser=async(req,res)=>{
    try{
        const {fullName,email,password} =req.body
        if(!fullName || !email ||password)
        {
            return res
            .status(400)
            .json({message:"all feild are required", success: false});
        }
        const user =await User.findOne({email})
        if(user){
            return res
            .status(400)
            .json({message:"user alredy exists",success:false});
        }
          const hashedPassword=await bcrypt.hash(password,10);
    const newUser=await User.create({
        fullName,
        email,
        password:hashedPassword,
    })
    const token=generateId(newUser._id);
    return res.status(201).json({token, success:true, message:"account created successfully",
        newUser,
    });

}
    catch(error){
  console.log("eror")
    }
    }
  


    // login user
export const login =async(req, res)=>{
    try{
     const {email,password}=req.body;
     if(!email || !password)
     {
        return res
        .staus(400)
        .json({message:"all feild are required",success:false})
     }
     const user=await User.findOne({email});
     if(!user)
     {
        return res
        .status(400)
        .json({message:"user does not exist",success:false})
     }
     const isMatch=await bcrypt.compare(password, user.password);
     if(!isMatch)
     {
        return res
        .status(400)
        .json({message:"invalid credentials",success:false})
     }
     else{
        const token=generateId(user._id);
        return res
        .status(200)
        .json({token,success:true,message:"login successfully",user});
     }
    }
    catch(error)
    {
     console.log("error");
    }
}

// check auth

export const authCheck=async(req,res)=>{
    try{
      const userId=req.user._id;
      const user=await User.findById(userId).select("-password");
       if(!user)
       {
        return res
        .status(404)
        .json({message:"user not found", success:false});
       }
       return res
       .status(200)
       .json({success:true.user});
    } catch(error)
    {
      console.log(error.message);
      return res
      .status(500)
      .json({message:error.message, success:false})
    }
}

// update profile

export const updateprofile=async(req,res)=>{
    try{
     const {fullName, bio, profilePic}=req.body
     const userId=req.user._id
     let updateUser;
     if(!profilePic)
     {
        updateUser=await User.findByIdAndUpdate(userId,{fullName,bio},{new:true});
    
     }
     else{
        const upload=await cloudinary.uploader.upload(profilePic);
        updateUser=await User.findByIdAndUpdate(
            userId,
            {fullName,bio,profilePic:upload.secure_url},
            {new:true},
        )
     }

     res.status(200).json({success:true , message:"profile update"})
    }catch(error)
    {
     console.log(error.message);
     return res
     .status(500)
     .json({message:error.message, success:false})
    }
}

export {registeruser, login ,authCheck}