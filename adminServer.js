import express from "express";
import dotenv from "dotenv";
import { buildAdminJS } from "./config/setup.js";
import { ADMIN_PORT } from "./config/config.js";
import connectDB from "./config/connect.js";

dotenv.config();

const app = express();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    await buildAdminJS(app); // Mount AdminJS at "/"
    app.get("/", (req, res) => {
      res.send("✅ AdminJS is running. Visit /admin for dashboard.");
    });

    app.listen(ADMIN_PORT, "0.0.0.0", () => {
      console.log(`✅ AdminJS running on http://localhost:${ADMIN_PORT}/admin`);
    });
  } catch (error) {
    console.log("❌ Error Starting AdminJS Server ->", error);
  }
};

start();
