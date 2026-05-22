import express from 'express';
import userRouter from './users/user.route.js';
import authRegisterRouter from './auth/register.route.js';
import authLoginRouter from './auth/login.router.js';
import { authenticateToken } from '../../middlewares/auth.middleware.js';
import imageTagRouter from './gallery/image-tag.route.js';
import imageRouter from './gallery/image.route.js';
import blogRouter from './blog/blog.route.js';

import { sendContactEmail } from '../../controllers/contact.controller.js';
import { sendBookingEmail } from '../../controllers/booking.controller.js';
import { sendRoomBookingEmail } from '../../controllers/roomBooking.controller.js';

const Router = express.Router();

Router.use('/users', authenticateToken, userRouter);
Router.use('/auth/newuser', authRegisterRouter);
Router.use('/auth', authLoginRouter);
Router.use('/gallery/imagetag', authenticateToken, imageTagRouter);
Router.use('/gallery/image', imageRouter);
Router.use('/blog', blogRouter)

Router.post('/contact/sendmail', sendContactEmail);
Router.post('/booking/bookingmail', sendBookingEmail);
Router.post('/booking/roombookinggmail', sendRoomBookingEmail);

Router.use((req, res) => {
    res.status(404).json({ message: "Path Notfound" })
});

export default Router;