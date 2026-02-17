import Movie from "../models/model.js"


export const movieIndex = async(req,res)=>{
    try{
        const movies=await(Movie.find());
        res.json(movies);
    }catch(error){
        res.status(500).json({message:error.message})
    }

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

export const moviedetail=async(req,res)=>{
    try{
        const movie=await Movie.findById(req.params.id);
        if (movie==null){
            return res.status(404).json({message:"can not find movie"})
        }else{
            res.json(movie);
        }
    }catch(error){
     return res.status(500).json({message: error.message})
    }
}

export const movieUpdate=async(req,res)=>{

    try{
        const updatedmovie=await Movie.findOneAndUpdate(
            {_id: req.params.id},
            {
                title: req.body.title,
                desc: req.body.desc,
            },
            {
                new:true,
            }
        
        )
        res.status(200).json(updatedmovie);
    }catch(error){
        res.status(400).send({message: error.message});
    }

};


export const movieDelete=(req,res)=>{
    res.send("delete a movie")

};