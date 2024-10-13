import { NextFunction, Router } from "express";
import { createStudent } from "../controllers/studentController";

const studentRouter = Router();

studentRouter.post("/", createStudent);

export default studentRouter;
