import Movie from "../models/model.js"


export const movieIndex = (req,res)=>{
    res.send("get all movies list");

};

export const movieCreate=async(req,res)=>{

   const newMoview=new Movie({
    title:req.body.title,
    desc:req.body.desc,
   })

   try{
    const movie=await newMoview.save();
    return res.status(201).json(movie);
   }catch(error){
      return res.status(400).json({message:error.message});
   }

};


export const movieUpdate=(req,res)=>{
    res.send("update a movie")

};


export const movieDelete=(req,res)=>{
    res.send("delete a movie")

};