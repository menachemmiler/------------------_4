import express from "express";
import dotenv from "dotenv";
import classRouter from "./routes/classRoutes";
import authRout from "./routes/authRoute";
import { errorHandler } from "./middleware/errorHandler";
import connectDB from "./config/db";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(cookieParser()); //

connectDB();

// Routes
// app.use("/auth", authRout);
app.use("/class", classRouter);
// app.use("/users", userRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
