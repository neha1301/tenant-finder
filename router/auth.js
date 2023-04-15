const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello world router js`);
});

// router.post('/signup',(req,res)=>{
//     console.log(req.body);
//     res.json({Message:req.body});
// });
router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.send 
    // const {name, email, password} = req.body;
    // res.json({name, email, password});
});


module.exports = router; 
// const Schema = require('../model/userSchema')
// // const { body, validationResult } = require("express-validator");

// router.post("/signup",async (req,res)=>{
//     try {
//         await Schema.create({
//             name:req.body.name,
//             email:req.body.email,
//             signinas:req.body.signinas,
//             phone:req.body.phone,
//             password:req.body.password,
//             cpassword:req.body.cpassword            
//         })

//         res.json({success:true});
//     } catch (error) {
//         res.json({success:false});
//         console.log(error)  
        
        
//     }
// })

// module.exports=router;