const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const userSchema= new mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true 
        },
        password:{
            type:String,
            required:true
        },
        profilePicture:{
            type:String,
            default:process.env.BASE_URL,
        },
    },
    {timestamps:true}
);
module.exports=mongoose.model("User",userSchema)