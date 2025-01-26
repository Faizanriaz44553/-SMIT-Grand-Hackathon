import express from 'express';
import signupController from '../controller/authcontroler/authController.js';
import LoanAddController from '../controller/loanData/LoanData.js';

const loanRoutes = express.Router()

loanRoutes.post('/loanAdd' , LoanAddController)
loanRoutes.post('/signup' , signupController);


export default loanRoutes