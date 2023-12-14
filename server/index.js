import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path: "../.env"}); // this is because .env file is outside of server folder, if it was in the server folder it is not required to give path

const db = process.env.DB;
// console.log(db) // this will print the db url
mongoose.connect(db).then(()=>{
        console.log("DB connected");
}).catch((err)=>{
        console.log(err);
})

const app = express();

app.listen(3000, () => {
        console.log("Server running on port 3000");
});
