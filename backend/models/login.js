import mongoose from "mongoose";

const userSchema=new Mongoose.Schema({
    fullName:{
        type:String,
        require:[true, "Name is required"],
        minlength:[3,"name must be atleast 3 character"],
        maxlength:[30,"name cannot exceed 30 character"],
        trim:true
    },

    email:{
        type:String,
        require:[true, "Email is require"],
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        require:[true, "Password is require"],
        minlength:6,

    },

    bio:{
        type:String,
        require:true,
    },
    profilePic:{
       type:String,
       default:""
    }},
  {timesstemps:true});

const User=mongoose.model("user",userSchema);
export default User;