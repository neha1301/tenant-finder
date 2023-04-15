const mongoose = require('mongoose');

const db = process.env.data;



mongoose.connect(db).then(()=>{
    console.log('Connection Successful');
}).catch((err)=>{
    console.log("no connection")
    console.error(err);
})