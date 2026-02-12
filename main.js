import express from "express";
import movieRoutes from "./routes/movies.js"

const app=express();

const PORT=3001;


app.get("/", (req,res)=>{
    res.json({msg:"hellow student !"});
})

app.use("/movies", movieRoutes);



app.listen(3001,()=>{
    console.log(`nanba i am running at http://localhost:${3001}`);
});