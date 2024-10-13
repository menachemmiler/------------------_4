import { Request, Response } from "express";
import { IStudent } from "../models/studentModel";
import { createStudentService } from "../services/studentService";



export const createStudent = async (
  req: Request<any, any, IStudent>,
  res: Response
) => {
  try {
    const savedUser: IStudent | unknown = await createStudentService(req.body);
    res.status(201).json(savedUser);
  } catch (err: any) {
    res.status(400).json({ msg: err.message });
  }
};



