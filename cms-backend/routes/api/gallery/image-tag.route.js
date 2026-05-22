import express from 'express';
import { createImageTag, getImageTags, editImageTag, updateImageTag, deleteImageTag } from '../../../controllers/gallery/image-tag.controller.js';
import { galleryTagRules } from '../../../validators/gallery.validator.js';
import { validateRequest } from '../../../middlewares/validate.middleware.js';

const router = express.Router();
//ROUTES
router.post('/create', galleryTagRules, validateRequest('/gallerycategorycreate'), createImageTag);
router.get('/get', getImageTags);
router.get('/edit/:id', editImageTag);
router.post('/update/:id',galleryTagRules, validateRequest('/gallerycategorycreate'), updateImageTag);
router.post('/delete/:id', deleteImageTag);
export default router;