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

// to call auth router
const userRouter= require('./router/userRoutes')
app.use('/api/auth', userRouter);
 
// to call notes router
const notesRouter= require('./router/notesRouter')
app.use('/api/notes', notesRouter)

app.get("/", ( req , res)=>{
    res.send("hello brothr");
})


app.listen(port,()=>{
 console.log(`Backend running:${port}`);
})