import nodemailer from 'nodemailer';
import crypto from 'crypto';

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "sylanipractice@gmail.com",  // Your email
    pass: "rxeaKKA@6K7qJ5i",   // Your email password
  },
});

// Function to generate a random password
const generateRandomPassword = () => {
  return crypto.randomBytes(8).toString('hex');  // Generates 16 characters random password
};

// Function to send email
const sendEmail = async (email, password) => {
  const mailOptions = {
    from: "sylanipractice@gmail.com",
    to: email,
    subject: "Your Signup Details",
    text: `Hello, your signup is successful. Here is your random password: ${password}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${email}`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Export the functions
export { generateRandomPassword, sendEmail };
