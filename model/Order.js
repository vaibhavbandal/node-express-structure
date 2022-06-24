const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    date:{
         type: Date, default: Date.now 
    },
});

const Order= mongoose.model("Order", Schema);
module.exports=Order;