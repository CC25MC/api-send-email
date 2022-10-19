const { response } = require("express");
const { transporter } = require("../config/mailer");

const sendEmail = async (req, res = response) => {
  try {
    const { name, email, message } = req.body;
    await transporter.sendMail({
      from: `"${name + " " + email}" <${process.env.USER}>`, // sender address
      to: `${process.env.USER}`, // list of receivers
      subject: `Posible Propuesta de Trabajo 🔥`, // Subject line
      text: message, // plain text body
      //   html: "<b>Hello world?</b>", // html body
    });
    res.status(200).json({ msj: "Mail sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error });
  }
};

module.exports = { sendEmail };
