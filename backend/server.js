const express = require('express');
const app= express();
const cors= require('cors')
app.use(cors())
const dotenv= require('dotenv')
dotenv.config();
app.use(express.json())

const userRouter= require('./router/userRoutes')
const connectDB= require('./model/db')
connectDB();
const port= process.env.PORT ||3000;

// to call auth router

app.use('/api', userRouter);
app.get("/", ( req , res)=>{
    res.send("hello brothr");
})


app.listen(port,()=>{
 console.log(`Backend running:${port}`);
})