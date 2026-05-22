import bcrypt from 'bcrypt';
import { prisma } from '../../lib/prisma.js';
import { businessName, businessFileName } from '../../public/generic.js';

export const registerPage = (req, res) => {
    res.render('auth/register', { businessName, businessFileName });
};

export const registerUser = async (req, res) => {
    try {

        const { email, password } = req.body;

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            req.session.errors = { email: 'Email already exists' };
            req.session.old = { email };
            return res.redirect('/register');
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await prisma.user.create({
            data: { email, password: hashedPassword }
        });

        req.session.success = 'Registration successful';
        res.redirect('/login');

    } catch (err) {
        console.error(err);
        req.session.error = 'Something went wrong';
        res.redirect('/register');
    }
};