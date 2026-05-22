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
const contactEmailTemplate = ({ name, phone, message, gender }) => `
<!DOCTYPE html>
<html>
<body style="font-family: Arial; background:#f5f5f5; padding:20px;">
  <div style="max-width:600px;margin:auto;background:#fff;padding:20px;border-radius:8px">
    <h2 style="color:#e11d48">📩 New Booking Form – ${gender} Room Tariff Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone || "-"}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
    <hr />
    <small>This message was sent from your website contact form.</small>
  </div>
</body>
</html>
`;
//EMAIL SEND CONTROLLER
export const sendRoomBookingEmail = async (req, res) => {

    const { name, phone, message, gender, recaptchaToken } = req.body;
    try {

        // 1️⃣ Validate input
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: "Name and Phone are required"
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
            from: `"Website Booking" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_RECEIVER,
            subject: `New Booking Message - ${name}`,
            html: contactEmailTemplate({ name, gender, phone, message })
        });
        //mail logger info
        mailLogger.info(`${gender} Room Booking enquiry received from ${name}, phone: ${phone}`);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {
        mailLogger.error("Failed to send booking email", {
            name,
            phone,
            error: error.message,
            stack: error.stack,
        });
        return res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
};
