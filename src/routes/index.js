const { Router } = require("express");
const nodemailer = require("nodemailer");
const router = Router();

router.post("/send-email", async (req, res) => {
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
    port: 465,
    secure: true,
    auth: {
      user: "makox.me@gmail.com", // generated ethereal user
      pass: "2092006xd", // generated ethereal password
    },
    tsl: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "makox.coder@gmail.com",
    subject: "Website contact form",
    html: contentHTML
  });

  console.log("Message sent: %s", info.messageId);

  res.redirect('/enviado.html');
});

module.exports = router;
