import mongoose from "mongoose";


const signupSchema = mongoose.Schema({
    cnic:{type:String, required:true},
    email:{type:String, required:true},
})

const signupModel = mongoose.model('Signup' , signupSchema);

export default signupModel