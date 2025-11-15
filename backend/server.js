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


/*
{
--------------------deadline------------ 
}*/
const cron = require("node-cron");
const Deadline = require("./model/deadlineModel");

// runs every minute
cron.schedule("* * * * *", async () => {
  const now = new Date();
  const thirtyMinLater = new Date(now.getTime() + 30 * 60 * 1000);

  // find deadlines occurring in next 30 mins
  const deadlines = await Deadline.find({
    deadlineTime: { $lte: thirtyMinLater, $gte: now },
    reminderSent: false
  }).populate("user");

  deadlines.forEach(async (d) => {
    console.log(`Reminder: '${d.title}' deadline in 30 mins for ${d.user.email}`);

    // send notification (email/sms/push)
    // TODO: add your actual method
    sendReminder(d.user.email, d.title, d.description);

    // mark as sent
    d.reminderSent = true;
    await d.save();
  });
});

function sendReminder(email, title, desc) {
  console.log(`📩 Sending reminder to ${email} --> ${title}`);
  // Later you can replace console log with:
  // nodemailer for email
  // twilio for sms
  // firebase for push notification
}



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