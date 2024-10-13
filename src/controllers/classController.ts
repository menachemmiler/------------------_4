import { Request, Response, NextFunction } from "express";
import Post, { IClass } from "../models/classModel";
import { createClassService } from "../services/classService";


// Create a new class
export const createClass = async (
  req: Request<any, any, IClass>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newClass: IClass | unknown = await createClassService(req.body);
    res.status(201).json(newClass);
  } catch (err: any) {
    res.status(400).json({ msg: err.message });
  }
};


