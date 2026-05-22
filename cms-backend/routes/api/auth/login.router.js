import express from 'express';
import { loginUser, logoutUser } from '../../../controllers/auth/login.controller.js';
import { loginRules } from '../../../validators/auth.validator.js';
import { validateRequest } from '../../../middlewares/validate.middleware.js';

const router = express.Router();
//ROUTES
router.post('/login', loginRules, validateRequest('/login'), loginUser);
router.get('/logout', logoutUser);

export default router;