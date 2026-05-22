import winston from "winston";
import path from "node:path";
import fs from "node:fs";

// Logs directory (absolute path)
const logDir = path.join(process.cwd(), "logs");

// Create logs folder if not exists
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Filter: ONLY info logs
const onlyInfo = winston.format((info) => {
  return info.level === "info" ? info : false;
});

// Create logger
export const mailLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.json()
  ),
  transports: [
    // ✅ SUCCESS LOGS (info only)
    new winston.transports.File({
      filename: path.join(logDir, "mail-success.log"),
      level: "info",
      format: onlyInfo(),
    }),

    // ❌ ERROR LOGS (error only)
    new winston.transports.File({
      filename: path.join(logDir, "mail-error.log"),
      level: "error",
    }),
  ],
});

// Console logs (development only)
if (process.env.NODE_ENV !== "production") {
  mailLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}
