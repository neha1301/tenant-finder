const dotenv =require("dotenv")
const express=require("express")
const mongoose=require("mongoose")

const app=express();

const db ="mongodb+srv://meghnabansal0729:Chotti2907@cluster0.pc0ynxw.mongodb.net/tenants?retryWrites=true&w=majority"

mongoose.connect(db).then(()=>{
    console.log('Connection Successful');
}).catch((err)=>{
    console.log("no connection")
    console.error(err);
})

const userSchema = ({
    First_name : String,
    Last_name : String,
    Email : String,
    phone : Number
})

const User = new mongoose.model("User",userSchema);
const reap = async()=>{
   const Use = new User({
    name: "neha",
    phone : 8709093892
})
const result = await Use.save();
console.log(result);
}



reap()