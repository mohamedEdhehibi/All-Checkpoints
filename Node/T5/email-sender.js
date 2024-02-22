const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'password'
  }
});

const mailOptions = {
  from: 'email@gmail.com',
  to: 'anotheremail@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is a test email sent from Node.js using Nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Error:', error);
  }
  console.log('Email sent:', info.response);
});
