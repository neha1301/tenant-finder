const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        require:true
    },
    lname: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    sinas: {
        type: String,
        require:true
    },
    phone: {
        type: Number,
        require:true
    },
    password: {
        type: String,
        require:true
    },
    cpassword: {
        type: String,
        require:true
    },

})

const User =  mongoose.model('USER', userSchema);

module.exports= User;