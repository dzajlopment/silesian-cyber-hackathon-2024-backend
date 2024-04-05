import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import app from "./app";

dotenv.config({})

const db = process.env.MONGO_URL!;

function handleDbError(){
    console.log("No database link provided!");
    process.exit(0);

}
if(!db){
    handleDbError()
}
mongoose.connect(db).then(()=>{
    console.log("Connected to database");
}).catch(()=>{
    console.log("Failed to connect to database")
})

const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{
    console.log("Server connected")
})