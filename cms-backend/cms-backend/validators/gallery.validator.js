import { body } from 'express-validator';
import { prisma } from '../lib/prisma.js';
//RULES
export const galleryTagRules = [
    body('name')
        .trim()
        .notEmpty().withMessage('Category name is required')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long')
        .custom(async (value, { req }) => {

            const id = req.params.id;

            const query = {
                where: {
                    name: value,
                    status: "ACTIVE"
                }
            };

            if (id) {
                query.where.NOT = { id: Number.parseInt(id) };
            }

            const existingTag = await prisma.galleImageTag.findFirst(query);

            if (existingTag) {
                throw new Error('This category name already exists');
            }
            return true;
        }),
    body('show').optional().isIn(['VISIBLE', 'HIDDEN']).withMessage('Invalid visibility status')
];

export const galleryImRules = [
    body("name")
        .trim()
        .notEmpty().withMessage("Name is required"),

    body("tagId")
        .notEmpty().withMessage("Category is required")
        .isInt().withMessage("Invalid category"),

    body("show")
        .notEmpty().withMessage("Status is required")
        .isIn(['VISIBLE', 'HIDDEN']).withMessage("Invalid status selected"),

    // Image Validation Update
    body("image").custom((value, { req }) => {

        const isUpdate = req.params.id ? true : false;

        if (!isUpdate && !req.file) {
            throw new Error("Image file is required");
        }

        if (req.file) {
            const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
            if (!allowedTypes.includes(req.file.mimetype)) {
                throw new Error("Only JPG, PNG, WEBP images are allowed");
            }
        }

        return true;
    })
];