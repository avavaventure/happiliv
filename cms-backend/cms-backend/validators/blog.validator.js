import { body } from "express-validator";
import { prisma } from "../lib/prisma.js";
//RULES
export const blogValidationRules = [
    body("blogName").trim().notEmpty().withMessage("Blog name is required"),

    body("slug")
        .notEmpty().withMessage("Slug is required")
        .matches(/^[a-z0-9-]+$/).withMessage("Slug must be lowercase and hyphen only")
        .custom(async (value, { req }) => {
            const blogId = req.params.id ? Number(req.params.id) : null;

            const existingBlog = await prisma.blog.findUnique({
                where: { slug: value }
            });

            if (existingBlog) {
                if (!blogId) {
                    throw new Error("Slug already exists");
                }
                if (blogId && existingBlog.id !== blogId) {
                    throw new Error("Slug is already in use by another blog");
                }
            }
            return true;
        }),

    body("blogDesc").notEmpty().withMessage("Blog description is required"),

    body("show")
        .notEmpty().withMessage("Status is required")
        .isIn(["VISIBLE", "HIDDEN"]).withMessage("Invalid status"),

    // body().custom((_, { req }) => {
    //     const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
    //     const isUpdate = req.params.id ? true : false;

    //     if (!isUpdate && (!req.files || !req.files.bannerImage)) {
    //         throw new Error("Banner image is required");
    //     }

    //     if (req.files) {
    //         Object.values(req.files).flat().forEach(file => {
    //             if (!allowedTypes.includes(file.mimetype)) {
    //                 throw new Error(`File ${file.fieldname} must be JPG, PNG, or WEBP`);
    //             }
    //         });
    //     }
    //     return true;
    // })

    body("bannerImage").custom((value, { req }) => {
        const file = req.files?.bannerImage?.[0] || req.file;

        // If no new file uploaded, skip validation
        if (!file) return true;

        const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
        if (!allowedTypes.includes(file.mimetype)) {
            throw new Error("Only JPG, JPEG, PNG, and WEBP formats are allowed.");
        }

        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            throw new Error("Banner image must be less than 5MB.");
        }

        return true;
    })
];