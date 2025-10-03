import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const BASE_URL = process.env.BASE_URL || "https://flipkart-clone-backend-8b5e.onrender.com";
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD || "";
export const RAZOR_PAY_KEY_ID = process.env.RAZOR_PAY_KEY_ID || "";
export const RAZOR_PAY_SECRET = process.env.RAZOR_PAY_SECRET || "";
