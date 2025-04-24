import express from "express";
import {
  generateWalletChallenge,
  verifyWalletSignature,
  verifyWalletAuth,
} from "../controllers/walletAuth.controller.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Rate limiting for wallet auth endpoints
const walletAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: "Too many attempts, please try again later",
});

// Wallet authentication routes
router.post("/challenge", walletAuthLimiter, generateWalletChallenge);
router.post("/verify", walletAuthLimiter, verifyWalletSignature);

export default router;
