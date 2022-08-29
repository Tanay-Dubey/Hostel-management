const mongoose=require("mongoose");
require("dotenv").config();

function connectDB()
{
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=>{
        console.log("Connected successfully to database");
    })
    .catch(()=>{
        console.log("Database connection error");
    });
}

module.exports=connectDB;
