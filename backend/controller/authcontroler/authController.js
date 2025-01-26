import express from 'express';
import signupModel from '../../models/authSchema.js';

import crypto from 'crypto'; // Random password generate karne ke liye crypto module
import sendEmail from '../../mail/nodemailer.js';

const authenticateUser = express.Router();

const generateRandomPassword = () => {
  return crypto.randomBytes(8).toString('hex');
};

authenticateUser.post('/signup', async (req, res) => {
  try {
    const { cnic, email } = req.body;
    if (!cnic || !email) {
      return res.status(400).json({ message: 'Invalid input' });
    }

    const existingUser = await signupModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }   

    
    sendEmail(email)

    const newUser = await signupModel.create({email , generateRandomPassword})


      return res.status(200).json({
        message: 'User registered successfully, and password has been sent to your email!', data :{newUser}
      });
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

export default authenticateUser;
