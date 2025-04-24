import express from "express";
import DB from "./config/DB.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import walletAuthRoutes from "./routes/walletAuth.routes.js";
// import otpRoutes from "./routes/otpRoutes.js";
import clientRoutes from "./routes/clientRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
// Allow requests from your frontend (React)

// import the and use the database configuration
DB();

// Calling the routes
app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/wallet", walletAuthRoutes);
// app.use("/api/otp", otpRoutes);
app.use("/api/user", userRoutes);
app.use("/api/clients", clientRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
