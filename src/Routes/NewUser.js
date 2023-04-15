const express = require("express")
const router = express.Router()
const Schema = require('../models/Schema')
// const { body, validationResult } = require("express-validator");

router.post("/newuser",async (req,res)=>{
    try {
        await Schema.create({
            name:req.body.name,
            email:req.body.email,
            signinas:req.body.signinas,
            phone:req.body.phone,
            password:req.body.password,
            cpassword:req.body.cpassword            
        })

        res.json({success:true});
    } catch (error) {
        res.json({success:false});
        console.log(error)  
        
        
    }
})

module.exports=router;