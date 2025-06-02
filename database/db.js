import mongoose from "mongoose";

export const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI environment variable not defined");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "MERN_STACK_LIBRARY_MANAGEMENT_SYSTEM",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000
    });
    console.log(`Connected to MongoDB at ${mongoose.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};
