import mongoose from "mongoose";

mongoose.connect("mongodb+srv://lupita29:luher29@lupita.vup0axr.mongodb.net/segi_database?retryWrites=true&w=majority&appName=Lupita")
//then para responder que si hubo conexion
.then(()=>console.log("MongoDB connected"))
//catch si hubo un error 
.catch((err)=>console.log(err));

export default mongoose;