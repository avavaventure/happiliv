import express from 'express';
import { getUsers, postUser } from '../../../controllers/user.controller.js';

const router = express.Router();

router.post('/createuser', postUser);
router.get('/getusers', getUsers);

export default router;