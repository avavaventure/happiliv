import express from "express";
import {
    createBlog,
    getAllBlogs,
    getBlog,
    editBlog,
    updateBlog,
    deleteBlog
} from "../../../controllers/blog/blog.controller.js";
import { createUploader } from "../../../middlewares/upload.middleware.js";
import { blogValidationRules } from "../../../validators/blog.validator.js";
import { validateRequest } from "../../../middlewares/validate.middleware.js";
import { handleMulterError } from "../../../middlewares/multerError.middleware.js";
import { authenticateToken } from '../../../middlewares/auth.middleware.js';

const router = express.Router();

const uploadBlog = createUploader("blogs");

const blogUpload = uploadBlog.fields([
    { name: 'bannerImage', maxCount: 1 },
    { name: 'mainImage', maxCount: 1 },
    { name: 'mainImage2', maxCount: 1 },
    { name: 'ogImage', maxCount: 1 }
]);
//ROUTES
router.post(
    "/create",
    authenticateToken,
    blogUpload,
    handleMulterError("/blogcreate"),
    blogValidationRules,
    validateRequest("/blogcreate"),
    createBlog
);

router.get("/get", getAllBlogs);
router.get("/getblog/:slug", getBlog);
router.get("/edit/:id", authenticateToken, editBlog);

router.post(
    "/update/:id",
    authenticateToken,
    blogUpload,
    (err, req, res, next) => {
        if (!err) return next();

        const fieldName = err.field || err.fieldname || "image";

        const fieldLabelMap = {
            bannerImage: "Banner Image",
            ogImage: "OG Image",
            mainImage: "Main Image",
            mainImage2: "Main Image 2",
            image: "Image",
        };

        const label = fieldLabelMap[fieldName] || fieldName;

        // ✅ file size error
        if (err.code === "LIMIT_FILE_SIZE") {
            req.session.error = `${label} size too large. Max allowed is 5MB.`;
        }

        // ✅ file format error (from createUploader fileFilter)
        else if (err.code === "INVALID_FILE_TYPE") {
            req.session.error = `${label} invalid format. Only JPG, JPEG, PNG, WEBP allowed.`;
        }

        // ✅ other errors
        else {
            req.session.error = `${label} upload error: ${err.message}`;
        }

        return res.redirect(`/api/blog/edit/${req.params.id}`);
    },
    blogValidationRules,
    validateRequest(req => `/api/blog/edit/${req.params.id}`),
    updateBlog
);

router.post("/delete/:id", authenticateToken, deleteBlog);

export default router;
