const mongoose = require('mongoose');



const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require:true
    },
    lastName: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique:true
    },
    role: {
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER",
        require:true
    },
    mobileNumber: {
        type: Number,
        require:true,
        unique:true
        
    },
    password: {
        type: String,
        require:true
    },
    // confirmPassword: {
    //     type: String,
    //     require:true
    // },

})

const User =  mongoose.model('User', userSchema);

module.exports= User;