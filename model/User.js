const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
        
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    date:{
         type: Date, default: Date.now 
    },
});

const User= mongoose.model("User", Schema);
module.exports=User;