"use server";
import * as nodemailer from "nodemailer";
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({ phone, message, email, subject, name }: any) {
  // Setup email data
  const to = "";
  let mailOptions = {
    from: '"Website" <rozanpoudel@gmail.com>',
    to,
    subject,
    html: `<div style="width: 400px">
  <h1>A new message from website,</h1>
  <p>From, ${name}</p>
  <p>
  Phone : ${phone}
  Email : ${email}
  Message : ${message}
  </p>
</div>`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error occurred:", error.message);
      return;
    }
    console.log("------------------------------------------------------------");
    console.log(`Email sent successfully to ${email} !!`);
    console.log("Message ID:", info.messageId);
    console.log("------------------------------------------------------------");
  });
}
