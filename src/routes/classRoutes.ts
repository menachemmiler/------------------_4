import { NextFunction, Router } from "express";
import { createClass } from "../controllers/classController";
const classRouter = Router();

classRouter.post("/", createClass);

export default classRouter;
