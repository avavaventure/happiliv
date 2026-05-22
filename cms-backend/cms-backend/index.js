import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import corsvalues from './config/cors.js';
import applicationRouter from './routes/api/index.js';
import applicationViewRouter from './routes/views/index.js'
import sessionFlash from './middlewares/sessionFlash.middleware.js'
import { faviconFileName } from "./public/generic.js";
const app = express();

/* ===============================
   BODY PARSERS
================================ */
// JSON (API calls)
app.use(express.json());

// FORM DATA (EJS forms)
app.use(express.urlencoded({ extended: true }));

// COOKIEPARSER
app.use(cookieParser());

// CORS
app.use(cors(corsvalues));

// EJS
app.set('view engine', 'ejs');

// Static files (images)
app.use(express.static("public"));
app.use("/uploads", express.static("public/data/uploads"));
app.locals.faviconFileName = faviconFileName;
sessionFlash(app);
/* ===============================
   ROUTES
================================ */

app.use('/api', applicationRouter);
app.use('/', applicationViewRouter)

/* ===============================
   START SERVER
================================ */

const PORT = process.env.PORT;



app.listen(PORT, () => {
   console.log(`Server is running on port http://localhost:${PORT}`);
});
