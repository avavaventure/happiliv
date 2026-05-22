import jwt from "jsonwebtoken";
import { prisma } from '../lib/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const authenticateToken = async (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/login');
    }

    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, email: true }
        });

        if (!user) {
            res.clearCookie('token');
            return res.redirect('/login');
        }

        req.user = user;
        res.locals.user = user;

        next();
    } catch (error) {
        console.error("Auth Error:", error.message);
        res.clearCookie('token');
        return res.redirect('/login');
    }
};

// isGuest route check

export const isGuest = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        try {
            jwt.verify(token, JWT_SECRET);
            return res.redirect('/');
        } catch (err) {
            console.error("Auth Error:", err.message);
            res.clearCookie('token');
        }
    }
    next();
};