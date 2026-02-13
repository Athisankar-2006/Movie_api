import express from "express";
import movieRoutes from "./routes/movies.js";
import connectDB from "./lib/db.js";

const app=express();

const PORT=3001;

//here is the database connection
connectDB();

app.get("/", (req,res)=>{
    res.json({msg:"hellow student !"});
})

app.use("/movies", movieRoutes);



app.listen(3001,()=>{
    console.log(`nanba i am running at http://localhost:${3001}`);
});