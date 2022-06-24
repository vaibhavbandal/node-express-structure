const mongoose = require("mongoose");
const {ProductSchema} = require("./Product");


const Schema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true 
    }, 
    user:{
        type:mongoose.Schema.Types.ObjectId,
    },
    date:{
         type: Date, default: Date.now 
    }, 
});

const Cart= mongoose.model("Cart", Schema);
module.exports=Cart;