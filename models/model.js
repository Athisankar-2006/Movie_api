import { Schema,model } from "mongoose";

const schema=new Schema({

    title: { 
        type: String,
        required:true,
        unique:true
    },
    desc:{
         type: String,
        required:true,
        unique:true
    },
});


//create your model
const Movie= model("movie",schema);

export default Movie;