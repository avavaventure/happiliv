import nodemailer from "nodemailer";
import axios from "axios";
import { mailLogger } from "../lib/mailLogger.js";

// SMTP transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

// Email template
const contactEmailTemplate = ({ name, email, phone, roomtype, gender }) => `
<!DOCTYPE html>
<html>
<body style="font-family: Arial; background:#f5f5f5; padding:20px;">
  <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:8px">
    <h2 style="color:#e11d48">📩 New Booking Enquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "-"}</p>
    <p><strong>Room Type:</strong> ${roomtype || "-"}</p>
    <p><strong>Gender:</strong> ${gender || "-"}</p>
    <hr />
    <small>This message was sent from your website booking form.</small>
  </div>
</body>
</html>
`;
//EMAIL CONTROLLER
export const sendBookingEmail = async (req, res) => {

    const { name, phone, email, roomtype, gender, recaptchaToken } = req.body;
    try {

        // 1️⃣ Validate input
        if (!name || !email || !phone || !roomtype || !gender) {
            return res.status(400).json({
                success: false,
                message: "Name, Email, Phone, Room Type and Gender are required"
            });
        }

        if (!recaptchaToken) {
            return res.status(400).json({
                success: false,
                message: "Missing reCAPTCHA token"
            });
        }

        // 2️⃣ Verify reCAPTCHA
        const captchaRes = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            null,
            {
                params: {
                    secret: process.env.RECAPTCHA_SECRET_KEY,
                    response: recaptchaToken
                }
            }
        );

        if (!captchaRes.data.success) {
            return res.status(400).json({
                success: false,
                message: "reCAPTCHA verification failed"
            });
        }

        // 3️⃣ Send email
        await transporter.sendMail({
            from: `"Booking Enquiry" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            replyTo: email,
            subject: `New Booking Enquiry - ${name}`,
            html: contactEmailTemplate({ name, email, phone, roomtype, gender })
        });

        //mail logger info
        mailLogger.info(`Booking email sent successfully from ${email}`);


        return res.status(200).json({
            success: true,
            message: "Booking enquiry sent successfully"
        });

    } catch (error) {
        mailLogger.error("Failed to send Booking email", {
            email,
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
};
