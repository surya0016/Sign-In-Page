const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://surya016:teYszTnjZKUgTI9l@cluster0.s9hrlwr.mongodb.net/SignupPage");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})

const User = mongoose.model("User",userSchema);

module.exports = {User};