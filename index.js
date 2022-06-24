const express = require('express')
const app = express();

// Configuration dotenv file
const dotenv = require("dotenv");
dotenv.config({
    path : "./config/config.env"
});

// Enabling cors 
const cors = require("./middleware/cors");
app.use(cors);

// Making database connection 
const database = require("./config/databaseConfig");
database()
    .then(()=>console.log("Connected To Database"))
    .catch(()=>console.log("Connection To Database Failed"));



// Main Routes Importing...
const userRoute = require("./routes/user");

// Main Business Routes
app.use('/account',userRoute);





// Testing purpose only
app.get('/test',(req,res)=>{
    res.send("test done...")
})

// Backend PORT and Listen
const PORT = process.env.PORT || 8000; 
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
})