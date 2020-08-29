const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/email-send", async (req, res) => {
  const { name, message, email } = req.body;

  contentHTML = `
    <h1>User Information</h1>
    
    <ul>
        <li>Username: ${name}</li>
        <li>Email: ${email}</li>
        <p>Message: ${message}</p>
    </ul>

  `;


  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'makox.me@gmail.com', // generated ethereal user
      pass: 'Valentin3112', // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from: "'MaKo Blog Server'<makox.me@gmail.com>",
    to: "makox.coder@gmail.com",
    subject: "Website contact form",
    html: contentHTML
  });

  console.log('Message send', info.messageID);

  res.redirect('/enviado.html');
});

module.exports = router;
