const express=require("express")
const mongoose=require("mongoose")

const app = express();
app.use(express.json())

const db ="mongodb+srv://meghnabansal0729:Chotti2907@cluster0.pc0ynxw.mongodb.net/tenants?retryWrites=true&w=majority"

const DB=async ()=>{
    await mongoose.connect(db).then(()=>{
    console.log('Connection Successful');
    const fetcheddata =mongoose.connection.db.collection("users");
    fetcheddata.find({}).toArray(function(err,data){
        if(err) console.log(err);
        else console.log(data);
    })
}).catch((err)=>{
    console.log("no connection")
    console.error(err);
})
}

module.exports=DB;