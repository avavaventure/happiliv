import { validationResult } from 'express-validator';

export const validateRequest = (redirectPath) => {
    return (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const formattedErrors = {};
            errors.array().forEach(err => {
                formattedErrors[err.path] = err.msg;
            });

            // 🔁 PAGE FLOW → redirect
            if (redirectPath) {
                req.session.errors = formattedErrors;
                req.session.old = req.body;
                return res.redirect(
                    typeof redirectPath === 'function'
                        ? redirectPath(req)
                        : redirectPath
                );
            }

            // 🚀 API FLOW → JSON
            return res.status(422).json({
                success: false,
                message: "Validation failed",
                errors: formattedErrors
            });
        }

        next();
    };
};
