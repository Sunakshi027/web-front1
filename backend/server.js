import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import http from "http";
import { Socket } from "socket.io";
import { connectDB } from "./config/connectDB.js";
import router from'../backend/Routes/loginrounts.js';


const app=express();
const server=http.createServer(app);
// middle ware
app.use(cors());
app.use(express.json({limit:"5mb"}));

// apinend point
app.get('/',(req,res)=>{
    res.send("hyy")
})


app.use("/api/users",usde)

const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>{
    connectDB();
    console.log("server is running on port 5000")
});