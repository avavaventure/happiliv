import { body } from 'express-validator';
//RULES FOR REGISTER
export const registerRules = [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 8 }).withMessage('Password must be 8+ chars')
];
//RULES FOR LOGIN
export const loginRules = [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').notEmpty().withMessage('Password is required')
];