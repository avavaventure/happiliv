import express from "express";
import { addImage, getAllImages, editGalleryImg, updateImage,updateImageAPI, deleteImGalley, addImageAPI } from "../../../controllers/gallery/image.controller.js";
import { createUploader } from "../../../middlewares/upload.middleware.js";
import { galleryImRules } from "../../../validators/gallery.validator.js";
import { validateRequest } from "../../../middlewares/validate.middleware.js";
import { handleMulterError } from "../../../middlewares/multerError.middleware.js";
import { authenticateToken } from '../../../middlewares/auth.middleware.js';

const router = express.Router();
const uploadGallery = createUploader("gallery");

router.get("/showallimage", getAllImages);
router.post("/create", authenticateToken, uploadGallery.single("image"), handleMulterError("/gallerycreate"), galleryImRules, validateRequest("/gallerycreate"), addImage);
router.get("/edit/:id", authenticateToken, editGalleryImg);
router.post("/update/:id", authenticateToken, uploadGallery.single("image"), handleMulterError((req) => `/api/gallery/image/update/${req.params.id}`), galleryImRules, validateRequest((req) => `/api/gallery/image/update/${req.params.id}`), updateImage);
router.post("/delete/:id", authenticateToken, deleteImGalley);

router.post("/create2", authenticateToken, uploadGallery.single("image"), handleMulterError(), galleryImRules, validateRequest(), addImageAPI);
router.post("/update2/:id", authenticateToken, uploadGallery.single("image"), handleMulterError(), galleryImRules, validateRequest(), updateImageAPI);

export default router;