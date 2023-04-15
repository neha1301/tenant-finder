const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

dotenv.config({path: "./config.env"});
require('./db/conn');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

app.use(express.json())

app.use(require('./router/auth'));

// const PORT = process.env.PORT;
// const User = require('./model/userSchema');
const PORT = process.env.PORT;



// mongoose.connect(db).then(()=>{
//     console.log('Connection Successful');
// }).catch((err)=>{
//     console.log("no connection")
//     console.error(err);
// })

// const middleware =(req,res,next)=>{
//     console.log(`hello midware`);
//     next();
// }

// // app.get('/', (req, res) => {
// //     res.send(`Hello world server.js`);
// // });

// app.get('/signin', (req, res) => {
//     res.send(`Hello world`);
// });

// app.get('/signup', (req, res) => {
//     res.send(`Hello world`);
// });

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});
