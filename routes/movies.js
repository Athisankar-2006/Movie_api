
import express from "express"

const router=express.Router();

import { movieIndex ,movieCreate,movieUpdate,movieDelete} from "../controlller/controller.js";

//crud functionality of movies




// R- for reading 
router.get("/",movieIndex);


// C- for creatinf
router.post("/",movieCreate);




// U- for update
router.put("/:id",movieUpdate);



// D-delete movies
router.delete("/:id",movieDelete);


export default router;

