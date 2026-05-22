import { prisma } from '../../lib/prisma.js';


/* ===============================
  CRUD CONTROLLER
================================ */
//CREATE
export const createImageTag = async (req, res) => {
    try {
        const { name, show } = req.body;

        const existingTag = await prisma.galleImageTag.findFirst({
            where: {
                name: name,
                status: "DELETED"
            }
        });

        if (existingTag) {
            req.session.error = "This category name has already been deleted due to our data safety (soft delete) process. Please use a different category name.";
            return res.redirect('/gallerycategorycreate');
        }

        await prisma.galleImageTag.create({
            data: { name, show }
        })
        req.session.success = "Category Created SuccessFully"
        res.redirect('/gallerycategory')
    } catch (error) {
        console.error(error);
        req.session.error = "Something went wrong. Please try again.";
        res.redirect('/gallerycategorycreate')
    }
}
export const getImageTags = async (req, res) => {
    try {
        const tags = await prisma.galleImageTag.findMany(
            {
                where: {
                    status: "ACTIVE",
                    show: "VISIBLE"
                }
            }
        );
        res.status(200).json(tags);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const editImageTag = async (req, res) => {
    // console.log(req.params);
    try {
        const { id } = req.params;
        const tag = await prisma.galleImageTag.findFirst({
            where: {
                id: Number.parseInt(id),
                status: "ACTIVE"
            }
        });
        if (!tag) {
            req.session.error = "Tag not found";
            return res.redirect('/gallerycategorycreate');
        }
        // res.json-ku pathila res.render use panni form-ah kaatunga
        res.render("gallery/categoryform", { tag, old: tag });
    } catch (error) {
        console.error(error);
        res.redirect('/gallerycategory');
    }
}


export const updateImageTag = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, show } = req.body;
        await prisma.galleImageTag.update({
            where: { id: Number.parseInt(id) },
            data: { name, show }
        });
        req.session.success = "updated successfully"
        return res.redirect('/gallerycategory')
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteImageTag = async (req, res) => {
    try {
        const { id } = req.params;
        const tagId = Number(id);

        // 1️⃣ Soft delete category
        await prisma.galleImageTag.update({
            where: { id: tagId },
            data: { status: "DELETED" }
        });

        // 2️⃣ Soft delete ALL images under this category
        await prisma.galleryImage.updateMany({
            where: { tagId: tagId },
            data: { status: "DELETED" }
        });

        req.session.success =
            "Category deleted successfully. All related images were also deleted.";

        return res.redirect('/gallerycategory');

    } catch (error) {
        console.error(error);
        req.session.error = "Something went wrong. Please try again.";
        return res.redirect('/gallerycategory');
    }
};

export const categoryListShow = async (req, res) => {
    try {
        const tags = await prisma.galleImageTag.findMany({
            where: {
                status: "ACTIVE",
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.render("gallery/categorylist", { tags });
    } catch (error) {
        console.error(error);
        req.session.error = "Could not fetch categories.";
        res.render("gallery/categorylist", { tags: [] });
    }
}
export const categoryFormShow = async (req, res) => {
    res.render("gallery/categoryform")
}