const express = require('express');
const app= express();
const cors= require('cors')
app.use(cors())
const dotenv= require('dotenv')
dotenv.config();
app.use(express.json())

const port= process.env.PORT ||3000;
app.get("/", ( req , res)=>{
    res.send("hello brother");
})


app.listen(port,()=>{
 console.log(`Backend running:${port}`);
})