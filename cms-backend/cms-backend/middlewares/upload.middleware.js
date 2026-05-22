import multer from "multer";
import path from "node:path";
import fs from "node:fs";
import crypto from "node:crypto";

// This function creates a custom upload instance based on the folder you provide
export const createUploader = (folderName) => {
    const uploadPath = `public/data/uploads/${folderName}`;

    // Ensure directory exists
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }

    const storage = multer.diskStorage({
        destination: (req, file, cb) => cb(null, uploadPath),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const secureHash = crypto.randomBytes(8).toString("hex");
            const uniqueName = `${Date.now()}-${secureHash}${ext}`;
            cb(null, uniqueName);
        }
    });

    return multer({
        storage,
        limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
        fileFilter: (req, file, cb) => {
            if (file.mimetype.startsWith("image/")) {
                cb(null, true);
            } else {
                cb(new Error("Only images allowed"), false);
            }
        }
    });
};