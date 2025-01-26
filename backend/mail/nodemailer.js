import nodemailer from 'nodemailer';
import tokenGenerator from '../helper/verifaidToken.js';

const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    auth: {
      user: 'sylanipractice@gmail.com',  
      pass: 'rxeaKKA@6K7qJ5i',  
    },
  });

  const mailOptions = {
    from: 'sylanipractice@gmail.com',
    to:email,
    subject: `your password` ,
    text:`your password is ${tokenGenerator}` 
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export default sendEmail;
