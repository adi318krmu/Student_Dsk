const express = require('express');
const app= express();
const cors= require('cors')
app.use(cors())
const dotenv= require('dotenv')
dotenv.config();
app.use(express.json())

const connectDB= require('./model/db')
connectDB();
const port= process.env.PORT ||3000;
app.get("/", ( req , res)=>{
    res.send("hello brothr");
})


app.listen(port,()=>{
 console.log(`Backend running:${port}`);
})