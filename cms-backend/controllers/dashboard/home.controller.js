import { prisma } from '../../lib/prisma.js';
/* ===============================
   VIEW CONTROLLER
================================ */
export const homePage = async (req, res) => {
    try {
        const galleryCount = await prisma.galleryImage.count({
            where: {
                status: "ACTIVE",
                show: "VISIBLE"
            }
        })
        const blogCount = await prisma.blog.count({
            where: {
                status: "ACTIVE",   
                show: "VISIBLE"
            }
        })
        return res.render("index", {
            galleryCount, blogCount
        });

    } catch (error) {
        console.error(error)
        req.session.error = "someting went wrong";
        res.redirect('/');
    }
}