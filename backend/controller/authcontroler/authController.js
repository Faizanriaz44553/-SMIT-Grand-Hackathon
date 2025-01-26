import signupModel from '../../models/authSchema.js';
import sendEmail from '../../mail/nodemailer.js';
import { generateRandomPassword } from '../../helper/emailHelper.js';

const signupController = async (req, res) => {
    try {
        const { cnic, email } = req.body;
    
        if (!cnic || !email) {
          return res.status(400).json({ message: 'CNIC and Email are required' });
        }
    
        const existingUser = await signupModel.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Generate random password
        const password = generateRandomPassword();
    
        // Send the generated password to user's email
        await sendEmail(email, password);
    
        const newUser = await signupModel.create({cnic,
            email,
            password,})
    
        return res.status(200).json({ message: 'Signup successful, password sent to email' , data:newUser});
      } catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({ message: 'Server error' });
      }
}

export default signupController;
