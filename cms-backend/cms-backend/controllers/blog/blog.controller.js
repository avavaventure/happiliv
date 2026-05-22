import { prisma } from "../../lib/prisma.js";
import path from "node:path";
import fs from "node:fs";

/* ===============================
   FILE CLEANUP
================================ */

const uploadPath = 'public/data/uploads/blogs';

// Utility to delete file if it exists
const deleteFile = (fileName) => {
    if (fileName) {
        const filePath = path.join(uploadPath, fileName);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }
};

/* ===============================
   VIEW CONTROLLER
================================ */
//TABLE VIEW

export const blogTable = async (req, res) => {
    try {
        const getAll = await prisma.blog.findMany({
            where: {
                status: "ACTIVE",
            },
            select: {
                id: true,
                blogName: true,
                slug: true,
                show: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        res.render('blog/blog', { getAll });
    } catch (error) {
        console.error(error);
        req.session.error = "Could not fetch blog.";
        res.render("blog/blog", { getAll: [] });
    }

}

// CREATE VIEW
export const blogCreateForm = async (req, res) => {
    res.render('blog/blogform');
}

/* ===============================
  CRUD CONTROLLER
================================ */
//CREATE BLOG
export const createBlog = async (req, res) => {
    try {
        const slugExists = await prisma.blog.findUnique({ where: { slug: req.body.slug } });
        if (slugExists) {
            req.session.errors = { slug: "Slug already exists" };
            req.session.old = req.body;
            return res.redirect("/blogcreate");
        }

        await prisma.blog.create({
            data: {
                blogName: req.body.blogName,
                slug: req.body.slug,
                blogDesc: req.body.blogDesc,
                blogDesc1: req.body.blogDesc1,
                blogDesc2: req.body.blogDesc2,
                metaTitle: req.body.metaTitle,
                metaDesc: req.body.metaDesc,
                metaKeyword: req.body.metaKeyword,
                ogTitle: req.body.ogTitle,
                ogDesc: req.body.ogDesc,
                bannerImage: req.files?.bannerImage ? req.files.bannerImage[0].filename : null,
                ogImage: req.files?.ogImage ? req.files.ogImage[0].filename : null,
                mainImage: req.files?.mainImage ? req.files.mainImage[0].filename : null,
                mainImage2: req.files?.mainImage2 ? req.files.mainImage2[0].filename : null,
                bannerImageAlt: req.body.bannerImageAlt,
                bannerTitle: req.body.bannerTitle,
                mainImageAlt: req.body.mainImageAlt,
                mainImageAlt2: req.body.mainImageAlt2,
                callToAction: req.body.callToAction,
                show: req.body.show,
                status: "ACTIVE"
            }
        });

        req.session.success = "Blog created successfully";
        res.redirect("/blog");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating blog");
    }
}
// EDIT BLOG
export const editBlog = async (req, res) => {
    try {
        const blog = await prisma.blog.findFirst({
            where: { id: Number(req.params.id), status: "ACTIVE" }
        });

        if (!blog) return res.redirect("/blog");

        const baseUrl = `${process.env.PROD_SERVER_URL}`;


        const formattedBlog = {
            ...blog,
            bannerImage: blog.bannerImage ? `${baseUrl}/uploads/blogs/${blog.bannerImage}` : null,
            ogImage: blog.ogImage ? `${baseUrl}/uploads/blogs/${blog.ogImage}` : null,
            mainImage: blog.mainImage ? `${baseUrl}/uploads/blogs/${blog.mainImage}` : null,
            mainImage2: blog.mainImage2 ? `${baseUrl}/uploads/blogs/${blog.mainImage2}` : null
        };

        res.render('blog/blogform', {
            tag: formattedBlog,
            old: formattedBlog,
            errors: {}
        });
    } catch (error) {
        console.error(error);
        res.redirect("/blog");
    }
};
//UPDATE BLOG
export const updateBlog = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const existingBlog = await prisma.blog.findUnique({ where: { id } });

        if (!existingBlog) return res.status(404).send("Blog not found");

        const handleImageUpdate = (fieldName, oldFile) => {

            if (req.files && req.files[fieldName]) {
                deleteFile(oldFile);
                return req.files[fieldName][0].filename;
            }

            if (req.body[`${fieldName}Removed`] === 'true') {
                deleteFile(oldFile);
                return null;
            }

            return oldFile;
        };

        await prisma.blog.update({
            where: { id },
            data: {
                blogName: req.body.blogName,
                slug: req.body.slug,
                blogDesc: req.body.blogDesc,
                blogDesc1: req.body.blogDesc1,
                blogDesc2: req.body.blogDesc2,
                metaTitle: req.body.metaTitle,
                metaDesc: req.body.metaDesc,
                metaKeyword: req.body.metaKeyword,
                ogTitle: req.body.ogTitle,
                ogDesc: req.body.ogDesc,
                bannerImage: handleImageUpdate('bannerImage', existingBlog.bannerImage),
                ogImage: handleImageUpdate('ogImage', existingBlog.ogImage),
                mainImage: handleImageUpdate('mainImage', existingBlog.mainImage),
                mainImage2: handleImageUpdate('mainImage2', existingBlog.mainImage2),
                bannerImageAlt: req.body.bannerImageAlt,
                bannerTitle: req.body.bannerTitle,
                mainImageAlt: req.body.mainImageAlt,
                mainImageAlt2: req.body.mainImageAlt2,
                callToAction: req.body.callToAction,
                show: req.body.show
            }
        });

        req.session.success = "Blog updated successfully";
        res.redirect("/blog");
    } catch (error) {
        console.error(error);
        req.session.error = "Error updating blog";
        res.redirect(`/api/blog/edit/${req.params.id}`)
    }
};

//DELETE BLOG
export const deleteBlog = async (req, res) => {
    try {
        await prisma.blog.update({
            where: { id: Number(req.params.id) },
            data: { status: "DELETED" }
        });

        req.session.success = "Tag deleted successfully"
        return res.redirect('/blog')
    } catch (error) {
        console.error(error)
        req.session.error = "Something went wrong. Please try again.";
        return res.redirect('/blog')
    }
};

/* ===============================
   API'S
================================ */
//GET ALL BLOG
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany({
            where: { status: "ACTIVE", show: "VISIBLE" },
            orderBy: { createdAt: "desc" }
        });

        const baseUrl = `${process.env.PROD_SERVER_URL}`;

        res.json(blogs.map(blog => ({
            id: blog.id,
            slug: blog.slug,
            blogName: blog.blogName,
            blogDesc: blog.blogDesc,
            bannerImage: blog.bannerImage
                ? `${baseUrl}/uploads/blogs/${blog.bannerImage}` : null,
            bannerImageAlt: blog.bannerImageAlt,
            createdDate: blog.createdAt,
        })));

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
// SLUG MATCH BLOG
export const getBlog = async (req, res) => {
    try {
        const { slug } = req.params;

        const blog = await prisma.blog.findUnique({
            where: { slug }
        });

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        const baseUrl = `${process.env.PROD_SERVER_URL}`;

        const relatedBlogs = await prisma.blog.findMany({
            where: {
                status: "ACTIVE",
                show: "VISIBLE",
                slug: { not: slug }
            },
            take: 3,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                slug: true,
                blogName: true,
                blogDesc: true,
                bannerImage: true,
                bannerImageAlt: true,
                createdAt: true,
            }
        });

        const formattedMainBlog = {
            ...blog,
            bannerImage: blog.bannerImage ? `${baseUrl}/uploads/blogs/${blog.bannerImage}` : null,
            ogImage: blog.ogImage ? `${baseUrl}/uploads/blogs/${blog.ogImage}` : null,
            mainImage: blog.mainImage ? `${baseUrl}/uploads/blogs/${blog.mainImage}` : null,
            mainImage2: blog.mainImage2 ? `${baseUrl}/uploads/blogs/${blog.mainImage2}` : null
        };

        const formattedRelated = relatedBlogs.map(item => ({
            ...item,
            bannerImage: item.bannerImage ? `${baseUrl}/uploads/blogs/${item.bannerImage}` : null
        }));

        res.status(200).json({
            ...formattedMainBlog,
            relatedBlogs: formattedRelated
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

