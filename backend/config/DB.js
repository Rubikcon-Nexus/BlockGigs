import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
// const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/blokgigs";

const MONGO_URI =
  // process.env.MONGO_URI;
  process.env.LOCAL_MONGO_URI;
// process.env.MONGO_URI;
// process.env.LOCAL_MONGO_URI;
//  || "mongodb://localhost:27017/blockgigs";

const DB = () => {
  // Connect to MongoDB
  mongoose
    .connect(MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

export default DB;
