import session from 'express-session';

const sessionFlash = (app) => {

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    }));

    app.use((req, res, next) => {
        res.locals.error = req.session.error || null;
        res.locals.success = req.session.success || null;
        res.locals.errors = req.session.errors || {};
        res.locals.old = req.session.old || {};

        delete req.session.error;
        delete req.session.success;
        delete req.session.errors;
        delete req.session.old;

        next();
    });
};

export default sessionFlash;
