import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../lib/prisma.js';
import { businessName, businessFileName } from '../../public/generic.js';

const JWT_SECRET = process.env.JWT_SECRET;

/* ===============================
   VIEW CONTROLLER
================================ */
//LOGIN
export const loginPage = async (req, res) => {
    res.render('auth/login', { businessName, businessFileName })
}
//LOGOUT
export const logoutUser = async (req, res) => {
    res.clearCookie('token');
    req.session.success = "Logged out successfully";
    res.redirect('/login');
}
/* ===============================
   LOGIN CONTROLLER
================================ */
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            req.session.errors = { email: 'Email not found' };
            req.session.old = { email };
            return res.redirect('/login');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            req.session.errors = { pass: "Invalid credentials" };
            req.session.old = { email };
            return res.redirect('/login');
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '5h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600000,
            sameSite: 'strict'
        });
        req.session.success = "Logged in successfully";
        return res.redirect('/');
    } catch (error) {
        console.error(error)
        res.session.error = "Somthing Went Wrong"
        return res.redirect('/login');
    }
}

