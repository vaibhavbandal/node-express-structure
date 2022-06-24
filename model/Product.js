const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.Number,
        unique:true,
        required:true
    },
    title:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    price:{
        type:mongoose.Schema.Types.Number,
        required:true
    },
    description:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    category:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    image:{
        type:mongoose.Schema.Types.String,
        required:true
    },
    rating:{
            rate:{
               type:Number
            },
            count:{
                type:Number
            }
        }
   
});


const Product= mongoose.model("Product", ProductSchema);
module.exports={Product,ProductSchema}