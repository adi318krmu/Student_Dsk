const nodemailer= require('nodemailer')

const sendMail= async({to , subject, message})=>{
  
    const transporter= nodemailer.createTransport({
        service:"gmail",
        user:{
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    })

    await transporter.sendMail({
     from: process.env.EMAIL_USER,
     to,
     subject,
     html:message,

    })

};

module.exports=sendMail;