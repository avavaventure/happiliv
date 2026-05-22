import express from 'express';
import { registerUser } from '../../../controllers/auth/register.controller.js';
import { registerRules } from '../../../validators/auth.validator.js';
import { validateRequest } from '../../../middlewares/validate.middleware.js';

const router = express.Router();
//ROUTES
router.post('/register', registerRules, validateRequest('/register'),
    registerUser);

export default router;