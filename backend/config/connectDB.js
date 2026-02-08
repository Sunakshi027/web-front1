import mongoose from "mongoose";


export const connectDB=async()=>{
try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MONGODB CONNECTED`);
}
catch(error)
{
    console.log("not connected")
}
};