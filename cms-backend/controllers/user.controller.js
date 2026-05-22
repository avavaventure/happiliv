import { prisma } from '../lib/prisma.js';

//CREATE USER
export const postUser = async (req, res) => {
    try {
        const { email, name } = req.body;
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//GET USER
export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}   