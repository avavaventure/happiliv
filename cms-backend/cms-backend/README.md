# PROJECT SETUP GUIDE

## TECH STACK

- Node.js >= 18.x
- Express ^5.2.1
- Prisma ^6.19.2
- @prisma/client ^6.19.2
- MariaDB
- jsonwebtoken
- nodemailer (SMTP)
- Google reCAPTCHA

## ENVIRONMENT SETUP

Create a `.env` file in the root directory:

```
NODE_ENV=development
PORT=8000
DEV_CLIENT_URL=http://localhost:3000
PROD_CLIENT_URL=https://yourdomain.com
PROD_SERVER_URL=https://api.yourdomain.com

DATABASE_URL="mysql://username:password@localhost:3306/db_name"

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_RECEIVER=receiver_email@gmail.com

RECAPTCHA_SECRET_KEY=your_recaptcha_secret

JWT_SECRET=your_super_secret_key
SESSION_SECRET=your_session_secret
```

## DATABASE SETUP

1. Login to MariaDB: `mysql -u root -p`
2. Create Database: `CREATE DATABASE db_name;`
3. Exit: `EXIT;`
4. Update `DATABASE_URL` in `.env`

## INSTALLATION

```bash
npm install
```

## DEVELOPMENT FLOW

> 💻 **Development Mode** - Use for local development with hot-reload

Set `NODE_ENV=development` in `.env`, then run:

```bash
# Initialize database migrations
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# Start development server with nodemon (auto-reload on file changes)
npm run dev
```

## PRODUCTION DEPLOYMENT

> 🚀 **Production Mode** - Use for live environments with strict security

Set `NODE_ENV=production` in `.env`, then run:

```bash
# Install dependencies
npm install

# Generate optimized Prisma client
npx prisma generate

# Apply database migrations safely
npx prisma migrate deploy

# Start production server
npm start
```

## PACKAGE.JSON SCRIPTS

```json
"scripts": {
    "dev": "nodemon src/server.js",
    "start": "node src/server.js"
}
```

## PROJECT STRUCTURE

```
src/
├── config/        # Configuration files
├── controllers/   # Business logic handlers
├── routes/        # API endpoints
├── middlewares/   # Custom middleware functions
├── prisma/        # Database schema
├── lib/          # Utility functions
└── index.js     # Entry point
```

## AUTHENTICATION

- Library: `jsonwebtoken`
- Ensure strong `JWT_SECRET`
- Do not expose secret in frontend
- Set token expiration

## PRODUCTION CHECKLIST

- [ ] `NODE_ENV=production`
- [ ] `DATABASE_URL` updated with production credentials
- [ ] SMTP credentials configured
- [ ] RECAPTCHA key updated
- [ ] `JWT_SECRET` changed to strong value
- [ ] HTTPS enabled
- [ ] CORS properly configured

