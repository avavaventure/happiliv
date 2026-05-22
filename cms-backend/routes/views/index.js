import express from "express";
import { authenticateToken, isGuest } from '../../middlewares/auth.middleware.js';

import { loginPage, logoutUser } from "../../controllers/auth/login.controller.js";
import { homePage } from "../../controllers/dashboard/home.controller.js"
import { registerPage } from "../../controllers/auth/register.controller.js"
import { blogTable, blogCreateForm } from '../../controllers/blog/blog.controller.js';
import { categoryListShow, categoryFormShow } from "../../controllers/gallery/image-tag.controller.js"
import { galleryListShow, galleryFormShow, galleryFormUpdate } from "../../controllers/gallery/image.controller.js"

const Router = express.Router();

// Router.get('/register', isGuest, registerPage);
Router.get('/login', isGuest, loginPage);
Router.get('/logout', authenticateToken, logoutUser);
Router.get('/', authenticateToken, homePage);
Router.get('/gallery', authenticateToken, galleryListShow);
Router.get('/gallerycreate', authenticateToken, galleryFormShow);
Router.get('/galleryupdate/:id', authenticateToken, galleryFormUpdate);
Router.get('/gallerycategory', authenticateToken, categoryListShow);
Router.get('/gallerycategorycreate', authenticateToken, categoryFormShow);
Router.get('/blog', authenticateToken, blogTable);
Router.get('/blogcreate', authenticateToken, blogCreateForm);

Router.use((req, res) => {
    res.status(404).render("partials/notfound")
});

export default Router;