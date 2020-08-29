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

  const testUser = await nodemailer.createTestAccount();
  console.log(testUser)
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testUser.user, // generated ethereal user
      pass: testUser.pass, // generated ethereal password
    }
  });

  const info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>',
    to: "valentincaligiuri@yahoo.com",
    subject: "Website contact form",
    html: contentHTML
  });

  console.log("Message sent: %s", info.messageId);

  res.redirect('/enviado.html');
});

module.exports = router;
