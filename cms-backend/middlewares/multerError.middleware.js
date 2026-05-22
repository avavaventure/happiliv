export const handleMulterError = (redirectPath) => {
    return (err, req, res, next) => {
        if (!err) return next();

        const errorMessage =
            err.message === "Only images allowed"
                ? err.message
                : err.code === "LIMIT_FILE_SIZE"
                    ? "Image size must be less than 5MB"
                    : "File upload failed";

        // ✅ get correct field name
        const fieldName = err.field || err.fieldname || "image";

        // 🔁 PAGE FLOW → redirect
        if (redirectPath) {
            req.session.errors = { [fieldName]: errorMessage };
            req.session.old = req.body;

            return res.redirect(
                typeof redirectPath === "function" ? redirectPath(req) : redirectPath
            );
        }

        // 🚀 API FLOW → JSON
        return res.status(422).json({
            success: false,
            message: errorMessage,
            field: fieldName
        });
    };
};
