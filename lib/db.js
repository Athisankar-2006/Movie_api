
// mongodb+srv://athisankar2k6_db_user:zqtvzu676mrrqeI0@cluster0.fqgfvh4.mongodb.net/?appName=Cluster0

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGOOS_URL);
       console.log("mongoose connnected ...");
    }catch(error){
       console.error(error.message);
       process.exit(1);
    }
    
}


export default connectDB;