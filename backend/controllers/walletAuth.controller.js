// import { Transaction, Networks } from "stellar-sdk";
// import jwt from "jsonwebtoken";
// import crypto from "crypto";
// import Client from "../models/Client.js";
// import Talent from "../models/Talent.js";
// import dotenv from "dotenv";
// import { createClient } from "redis";

// dotenv.config();

// // Initialize Redis client (for production)
// let redisClient;
// if (process.env.NODE_ENV === "production") {
//   redisClient = createClient({
//     url: process.env.REDIS_URL,
//   });
//   redisClient.on("error", (err) => console.log("Redis Client Error", err));
//   redisClient.connect();
// }

// // Determine user type dynamically
// const getUserModel = (role) => {
//   if (role === "client") return Client;
//   if (role === "talent") return Talent;
//   throw new Error("Invalid user role");
// };

// // Generate JWT Token (consistent with your existing auth)
// const generateToken = (id, role) => {
//   return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// // Store and retrieve challenges (Redis in production, memory in development)
// const challengeStore = {
//   async set(key, value, ttl) {
//     if (redisClient) {
//       await redisClient.set(key, value, { EX: ttl });
//     } else {
//       this.memoryStore[key] = value;
//       setTimeout(() => delete this.memoryStore[key], ttl * 1000);
//     }
//   },
//   async get(key) {
//     if (redisClient) {
//       return await redisClient.get(key);
//     }
//     return this.memoryStore[key];
//   },
//   async delete(key) {
//     if (redisClient) {
//       await redisClient.del(key);
//     } else {
//       delete this.memoryStore[key];
//     }
//   },
//   memoryStore: {},
// };

// // Generate a challenge for wallet authentication
// export const generateWalletChallenge = async (req, res) => {
//   const { wallet_address } = req.body;

//   try {
//     if (!wallet_address) {
//       return res.status(400).json({ message: "Wallet address is required" });
//     }

//     const nonce = crypto.randomBytes(16).toString("hex");
//     const timestamp = Date.now();
//     const ttl = 300; // 5 minutes in seconds

//     // Format: wallet_address:nonce:timestamp
//     const challenge = `${wallet_address}:${nonce}:${timestamp}`;

//     await challengeStore.set(`challenge:${wallet_address}`, challenge, ttl);

//     res.json({
//       challenge,
//       networkPassphrase:
//         process.env.STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET,
//     });
//   } catch (error) {
//     console.error("Challenge generation error:", error);
//     res.status(500).json({ message: "Failed to generate challenge" });
//   }
// };

// // Verify wallet signature and authenticate user
// export const verifyWalletSignature = async (req, res) => {
//   const { wallet_address, signed_challenge, role } = req.body;

//   try {
//     // Validate inputs
//     if (!wallet_address || !signed_challenge) {
//       return res.status(400).json({
//         message: "Wallet address and signed challenge are required",
//       });
//     }

//     // Retrieve and validate challenge
//     const storedChallenge = await challengeStore.get(
//       `challenge:${wallet_address}`
//     );
//     if (!storedChallenge) {
//       return res.status(400).json({ message: "Invalid or expired challenge" });
//     }

//     // Parse challenge components
//     const [storedAddress, nonce, timestamp] = storedChallenge.split(":");
//     if (storedAddress !== wallet_address) {
//       return res.status(400).json({ message: "Challenge mismatch" });
//     }

//     // Verify challenge expiration (5 minutes)
//     if (Date.now() - parseInt(timestamp) > 300000) {
//       await challengeStore.delete(`challenge:${wallet_address}`);
//       return res.status(400).json({ message: "Challenge expired" });
//     }

//     // Verify the Stellar transaction signature
//     const networkPassphrase =
//       process.env.STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET;
//     let tx;
//     try {
//       tx = new Transaction(signed_challenge, networkPassphrase);
//     } catch (err) {
//       return res.status(400).json({ message: "Invalid transaction XDR" });
//     }

//     // Verify the signature
//     if (!tx.verifySigners([wallet_address])) {
//       return res.status(401).json({ message: "Invalid signature" });
//     }

//     // Clean up the challenge
//     await challengeStore.delete(`challenge:${wallet_address}`);

//     // Find or create user
//     const Model = getUserModel(role || "talent"); // Default to talent
//     let user = await Model.findOne({ wallet_address });

//     if (!user) {
//       // Auto-register with wallet
//       user = await Model.create({
//         wallet_address,
//         isVerified: true,
//         fullname: `User-${wallet_address.slice(0, 8)}`,
//         // Add other default fields as needed
//       });
//     }

//     // Generate JWT token
//     const token = generateToken(user._id, user.role);

//     res.json({
//       message: "Wallet authentication successful",
//       token,
//       user: {
//         id: user._id,
//         wallet_address: user.wallet_address,
//         role: user.role,
//         isVerified: user.isVerified,
//       },
//     });
//   } catch (error) {
//     console.error("Wallet verification error:", error);
//     res.status(500).json({ message: "Authentication failed" });
//   }
// };

// // Middleware to verify wallet-authenticated users
// export const verifyWalletAuth = async (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Authentication required" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Check if user exists with this wallet
//     const user =
//       (await Talent.findOne({
//         _id: decoded.id,
//         wallet_address: { $exists: true },
//       })) ||
//       (await Client.findOne({
//         _id: decoded.id,
//         wallet_address: { $exists: true },
//       }));

//     if (!user) {
//       return res.status(401).json({ message: "Invalid wallet authentication" });
//     }

//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

import { Transaction, Networks } from "stellar-sdk";
import crypto from "crypto";
import { createClient } from "redis";

// Initialize Redis client if in production
let redisClient;
if (process.env.NODE_ENV === "production") {
  redisClient = createClient({ url: process.env.REDIS_URL });
  redisClient.on("error", (err) => console.log("Redis Error", err));
  redisClient.connect();
}

// Challenge storage system (Redis in prod, memory in dev)
const challengeStore = {
  memoryStore: {},

  async set(key, value, ttl) {
    if (redisClient) {
      await redisClient.set(key, value, { EX: ttl });
    } else {
      this.memoryStore[key] = value;
      setTimeout(() => delete this.memoryStore[key], ttl * 1000);
    }
  },

  async get(key) {
    if (redisClient) return await redisClient.get(key);
    return this.memoryStore[key];
  },

  async delete(key) {
    if (redisClient) await redisClient.del(key);
    else delete this.memoryStore[key];
  },
};

/**
 * Generates a Stellar challenge transaction for wallet auth
 */
export const generateWalletChallenge = async (req, res) => {
  const { wallet_address } = req.body;

  try {
    // Validate input
    if (!wallet_address) {
      return res.status(400).json({ message: "Wallet address required" });
    }

    // Create unique challenge
    const nonce = crypto.randomBytes(16).toString("hex");
    const timestamp = Date.now();
    const challenge = `${wallet_address}:${nonce}:${timestamp}`;

    // Store challenge for 5 minutes
    await challengeStore.set(`challenge:${wallet_address}`, challenge, 300);

    res.json({
      challenge,
      networkPassphrase:
        process.env.STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET,
    });
  } catch (error) {
    console.error("Challenge error:", error);
    res.status(500).json({ message: "Failed to generate challenge" });
  }
};

/**
 * Verifies a signed challenge transaction
 */
export const verifyWalletSignature = async (req, res) => {
  const { wallet_address, signed_challenge, role = "talent" } = req.body;

  try {
    // 1. Validate inputs
    if (!wallet_address || !signed_challenge) {
      return res.status(400).json({
        message: "Wallet address and signed challenge required",
      });
    }

    // 2. Retrieve stored challenge
    const storedChallenge = await challengeStore.get(
      `challenge:${wallet_address}`
    );
    if (!storedChallenge) {
      return res.status(400).json({ message: "Invalid/expired challenge" });
    }

    // 3. Verify challenge components
    const [storedAddress] = storedChallenge.split(":");
    if (storedAddress !== wallet_address) {
      return res.status(400).json({ message: "Wallet address mismatch" });
    }

    // 4. Verify the Stellar transaction
    const networkPassphrase =
      process.env.STELLAR_NETWORK_PASSPHRASE || Networks.TESTNET;

    let tx;
    try {
      tx = new Transaction(signed_challenge, networkPassphrase);
    } catch (err) {
      return res.status(400).json({ message: "Invalid transaction XDR" });
    }

    // 5. Verify the signature
    if (!tx.verifySigners([wallet_address])) {
      return res.status(401).json({ message: "Invalid signature" });
    }

    // 6. Clean up used challenge
    await challengeStore.delete(`challenge:${wallet_address}`);

    res.json({
      success: true,
      message: "Wallet verification successful",
    });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ message: "Wallet verification failed" });
  }
};

/**
 * Checks if a wallet is registered
 */
export const checkWalletRegistration = async (req, res) => {
  const { wallet_address } = req.query;

  try {
    if (!wallet_address) {
      return res.status(400).json({ message: "Wallet address required" });
    }

    // Check both Talent and Client models
    const [talent, client] = await Promise.all([
      Talent.findOne({ wallet_address }),
      Client.findOne({ wallet_address }),
    ]);

    res.json({
      registered: !!(talent || client),
      role: talent ? "talent" : client ? "client" : null,
    });
  } catch (error) {
    console.error("Registration check error:", error);
    res.status(500).json({ message: "Failed to check registration" });
  }
};
