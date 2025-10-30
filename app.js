import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";

import userRoutes from "./routes/user.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import orderRoutes from "./routes/order.js";
import bannerRoutes from "./routes/bannerRoutes.js";

import connectDB from "./config/connect.js";
import { PORT, ADMIN_PORT } from "./config/config.js";
import { buildAdminJS } from "./config/setup.js";

dotenv.config();

// ------------------------
// Create Express Apps
// ------------------------
const app = express(); // Main backend API
const adminApp = express(); // Separate AdminJS server 👈 this was missing

// ------------------------
// Middleware
// ------------------------
app.use(
  cors({
    origin: [
      "http://localhost:8081",               // For Expo local dev
      "https://ekart-clone.netlify.app",     // Your Netlify site
      "https://flipkart-clone-backend-8b5e.onrender.com", // Optional (for testing API directly)
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


// ------------------------
// Static Files
// ------------------------
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// ------------------------
// Routes
// ------------------------
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/user", userRoutes);
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/api/banners", bannerRoutes);

// ------------------------
// Start Servers
// ------------------------
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    // Initialize AdminJS on a separate app instance
    await buildAdminJS(adminApp);

    // Main backend server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`✅ API Server running on http://localhost:${PORT}`);
    });

    // AdminJS backend
    adminApp.listen(ADMIN_PORT, "0.0.0.0", () => {
      console.log(`✅ AdminJS running on http://localhost:${ADMIN_PORT}/admin`);
    });
  } catch (error) {
    console.log("❌ Error Starting Server ->", error);
  }
};

start();
