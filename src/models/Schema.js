const mongoose = require("mongoose");

const {Schema} = mongoose;

const UserSchema = new Schema({
    name : {
        type: String,
        required: true},

    email : String,
    signinas: {
        type:String,
        required:true
    },
    phone : {
        type: String,
        required: true,
        unique : true
    },
    password : {
        type: String,
        required: true
    },
    cpassword : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('user',UserSchema)