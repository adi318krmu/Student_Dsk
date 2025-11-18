
// const cron = require("node-cron");
// const Deadline = require("./model/deadlineModel");

// // runs every minute
// cron.schedule("* * * * *", async () => {
//   const now = new Date();
//   const thirtyMinLater = new Date(now.getTime() + 30 * 60 * 1000);

//   // find deadlines occurring in next 30 mins
//   const deadlines = await Deadline.find({
//     deadlineTime: { $lte: thirtyMinLater, $gte: now },
//     reminderSent: false
//   }).populate("user");

//   deadlines.forEach(async (d) => {
//     console.log(`Reminder: '${d.title}' deadline in 30 mins for ${d.user.email}`);

//     // send notification (email/sms/push)
//     // TODO: add your actual method
//     sendReminder(d.user.email, d.title, d.description);

//     // mark as sent
//     d.reminderSent = true;
//     await d.save();
//   });
// });

// function sendReminder(email, title, desc) {
//   console.log(`📩 Sending reminder to ${email} --> ${title}`);
//   // Later you can replace console log with:
//   // nodemailer for email
//   // twilio for sms
//   // firebase for push notification
// }
const cron = require("node-cron");
const Deadline = require("../model/deadlineModel");
const sendReminder = require("./SendEmail");

// Runs every *one minute*
cron.schedule("* * * * *", async () => {
  try {
    const now = new Date();

    // Time between now and next 30 mins
    const thirtyMinLater = new Date(now.getTime() + 30 * 60 * 1000);

    // Deadlines coming in next 30 mins AND reminder not sent yet
    const deadlines = await Deadline.find({
      deadlineTime: {
        $gte: now,
        $lte: thirtyMinLater
      },
      reminderSent: false
    }).populate("user");

    if (deadlines.length > 0) {
      console.log(`⏳ ${deadlines.length} deadlines found for reminders.`);
    }

    for (let d of deadlines) {
      // Send email reminder
      await sendReminder(
        d.user.email,
        d.title,
        d.description,
        d.deadlineTime
      );

      // Mark reminder as sent
      d.reminderSent = true;
      await d.save();
    }

  } catch (error) {
    console.log("Cron Error:", error.message);
  }
});
