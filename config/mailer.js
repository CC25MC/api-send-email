const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.HOST,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.USER, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  },
});

transporter.verify(() => {
  console.log("Ready for send emails");
});

module.exports = { transporter };
