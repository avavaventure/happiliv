import { prisma } from "../../lib/prisma.js";
import path from "node:path";
import fs from "node:fs";

/* ===============================
  VIEW CONTROLLER
================================ */

//TABLE VIEW
export const galleryListShow = async (req, res) => {
    try {
        const images = await prisma.galleryImage.findMany({
            where: {
                status: "ACTIVE",
            },
            include: {
                tag: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const baseUrl = `${process.env.PROD_SERVER_URL}`;
        const getAllList = images.map(item => ({
            ...item,
            image: `${baseUrl}/uploads/gallery/${item.image}`
        }));

        res.render("gallery/gallerylist", { getAllList });
    } catch (error) {
        console.error(error);
        req.session.error = "Could not fetch gallery images.";
        res.render("gallery/gallerylist", { getAllList: [] });
    }
}

//CREATE FORM VIEW
export const galleryFormShow = async (req, res) => {
    try {
        const tags = await prisma.galleImageTag.findMany({
            where: {
                status: "ACTIVE",
                show: "VISIBLE"
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                name: true
            }
        });
        res.render("gallery/galleryform", { tags })
    } catch (error) {
        console.error(error)
        req.session.error = "Could not fetch Catagories.";
        res.render("gallery/galleryform", { tags: [] });
    }
}

export const galleryFormUpdate = async (req, res) => {
    try {
        const { id } = req.params;

        const image = await prisma.galleryImage.findUnique({
            where: { id: Number(id) },
        });

        const tagList = await prisma.galleImageTag.findMany({
            where: {
                status: "ACTIVE",
                show: "VISIBLE"
            },
            orderBy: {
                createdAt: 'desc'
            },
            select: {
                id: true,
                name: true
            }
        })

        if (!image) {
            req.session.error = "Image not found";
            return res.redirect("/gallery");
        }

        res.render("gallery/galleryform", {
            tags: tagList,
            tag: { ...image },
            old: { ...image },
            errors: {}
        });

    } catch (error) {
        console.error(error);
        req.session.error = "Could not fetch image.";
        return res.redirect("/gallery");
    }
};


/* ===============================
  CRUD CONTROLLER
================================ */

//CREATE
export const addImage = async (req, res) => {
    try {
        const { name, tagId, link, show } = req.body;

        await prisma.galleryImage.create({
            data: {
                name,
                image: req.file.filename,
                tagId: Number(tagId),
                link: link || null,
                show: show || "VISIBLE"
            }
        });

        res.redirect("/gallery");
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong!");
    }
};

export const addImageAPI = async (req, res) => {
    try {
        const { name, tagId, link, show } = req.body;

        if (!req.file) {
            return res.status(422).json({
                success: false,
                message: "Image is required"
            });
        }

        const image = await prisma.galleryImage.create({
            data: {
                name,
                image: req.file.filename,
                tagId: Number(tagId),
                link: link || null,
                show: show || "VISIBLE"
            }
        });

        return res.status(201).json({
            success: true,
            message: "Image added successfully",
            data: image
        });

    } catch (error) {
        console.error("Add Image API Error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong!"
        });
    }
};


//EDIT
export const editGalleryImg = async (req, res) => {
    try {
        const { id } = req.params;

        const image = await prisma.galleryImage.findFirst({
            where: {
                id: Number(id),
                status: "ACTIVE"
            }
        });

        if (!image) {
            req.session.error = "Image not found";
            return res.redirect("/gallery");
        }

        const tags = await prisma.galleImageTag.findMany({
            where: { status: "ACTIVE" }
        });

        const baseUrl = `${process.env.PROD_SERVER_URL}`;

        const formattedImage = {
            ...image,
            imagePath: `${baseUrl}/uploads/gallery/${image.image}`
        };


        res.render("gallery/galleryform", {
            tag: formattedImage,
            tags: tags,
            old: formattedImage,
            errors: {}
        });

    } catch (error) {
        console.error(error);
        req.session.error = "Something went wrong!";
        res.redirect("/gallery");
    }
};

//UPDATE
export const updateImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, tagId, show, imageRemoved } = req.body;

        const existingRecord = await prisma.galleryImage.findUnique({
            where: { id: Number(id) }
        });

        let finalImageName = existingRecord.image;


        if (req.file) {

            const oldPath = path.join('public/data/uploads/gallery', existingRecord.image);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);

            finalImageName = req.file.filename;
        }

        else if (imageRemoved === 'true') {
            const oldPath = path.join('public/uploads/gallery', existingRecord.image);
            if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);

            finalImageName = "";
        }


        await prisma.galleryImage.update({
            where: { id: Number(id) },
            data: {
                name: name,
                tagId: Number(tagId),
                show: show,
                image: finalImageName
            }
        });

        res.redirect(`/api/gallery/image/edit/${req.params.id}`);
    } catch (error) {
        console.error("Update error:", error);
        res.status(500).send("Error updating image");
    }
};

export const updateImageAPI = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, tagId, show, imageRemoved } = req.body;

        const existingRecord = await prisma.galleryImage.findUnique({
            where: { id: Number(id) }
        });

        if (!existingRecord) {
            return res.status(404).json({ message: "Image not found" });
        }

        let finalImageName = existingRecord.image;

        // 🖼️ New image uploaded
        if (req.file && req.file.size > 0) {
            if (existingRecord.image) {
                const oldPath = path.join(
                    'public/uploads/gallery',
                    existingRecord.image
                );
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }

            finalImageName = req.file.filename;
        }

        // 🗑️ Image removed without replacement
        else if (imageRemoved === 'true') {
            if (existingRecord.image) {
                const oldPath = path.join(
                    'public/uploads/gallery',
                    existingRecord.image
                );
                if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
            }
            finalImageName = null;
        }

        await prisma.galleryImage.update({
            where: { id: Number(id) },
            data: {
                name,
                tagId: Number(tagId),
                show,
                image: finalImageName
            }
        });

        // ✅ PURE API RESPONSE
        return res.status(200).json({
            success: true,
            message: "Gallery image updated successfully",
            id
        });

    } catch (error) {
        console.error("Update error:", error);
        return res.status(500).json({
            success: false,
            message: "Error updating image"
        });
    }
};


//DELETE
export const deleteImGalley = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.galleryImage.update({
            where: { id: Number.parseInt(id) },
            data: { status: "DELETED" }
        });

        req.session.success = "Tag deleted successfully"
        return res.redirect('/gallery')

    } catch (error) {
        console.error(error)
        req.session.error = "Something went wrong. Please try again.";
        return res.redirect('/galleryform')
    }
}

/* ===============================
  API'S CONTROLLER
================================ */

//GET API
export const getAllImages = async (req, res) => {
    try {
        const page = Number.parseInt(req.query.page) || 1;
        const limit = Number.parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        const tagId = req.query.tagId ? Number(req.query.tagId) : null;

        // 1) categories (only categories which have images)
        const categories = await prisma.galleImageTag.findMany({
            where: {
                status: "ACTIVE",
                show: "VISIBLE",
                images: {
                    some: {
                        status: "ACTIVE",
                        show: "VISIBLE",
                    },
                },
            },
            orderBy: { createdAt: "desc" },
            select: { id: true, name: true },
        });

        // 2) image filter
        const whereCondition = {
            status: "ACTIVE",
            show: "VISIBLE",
            ...(tagId ? { tagId } : {}),
        };

        // 3) images
        const images = await prisma.galleryImage.findMany({
            where: whereCondition,
            orderBy: { createdAt: "desc" },
            skip,
            take: limit,
            select: {
                id: true,
                image: true,
                name: true,
                link: true,
                tag: {
                    select: { id: true, name: true },
                },
            },
        });

        // 4) total count
        const totalCount = await prisma.galleryImage.count({
            where: whereCondition,
        });

        // 5) format url
        const baseUrl = process.env.PROD_SERVER_URL;
        const formattedImages = images.map((img) => ({
            ...img,
            image: img.image ? `${baseUrl}/uploads/gallery/${img.image}` : null,
        }));

        return res.status(200).json({
            data: { categories, images: formattedImages },
            page,
            limit,
            totalLoaded: formattedImages.length,
            totalPages: Math.ceil(totalCount / limit),
            totalCount,
            selectedTagId: tagId,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
