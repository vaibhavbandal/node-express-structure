const mongoose = require("mongoose");

// async function return promise 
const connect = async ()=>{
    mongoose.connect(process.env.DATABASE);
}
module.exports= connect;