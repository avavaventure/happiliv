const allowedOrigin =
    process.env.NODE_ENV === "production"
        ? process.env.PROD_CLIENT_URL
        : process.env.DEV_CLIENT_URL;


const corsvalues = {
    origin: [allowedOrigin, process.env.SEC_ENV],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

export default corsvalues;
