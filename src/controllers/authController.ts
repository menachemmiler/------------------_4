import { Request, Response } from "express";
import paloadTokenDTO from "../types/DTO/paloadTokenDTO";
import { loginStudentService, loginTeacherService } from "../services/authService";

export const loginStudent = async (
  req: Request<any, any, paloadTokenDTO>,
  res: Response
): Promise<void> => {
  try {
    const token = await loginStudentService(req.body);
    res.cookie("token", token);
    res.json({
      msg: `welcome ${req.body.name} token=${token}`,
    });
  } catch (err: any) {
    res.json({
      msg: err.message,
    });
  }
};

export const loginTeacher = async (
  req: Request<any, any, paloadTokenDTO>,
  res: Response
): Promise<void> => {
  try {
    const token = await loginTeacherService(req.body);
    res.cookie("token", token);
    res.json({
      msg: `welcome ${req.body.name} token=${token}`,
    });
  } catch (err: any) {
    res.json({
      msg: err.message,
    });
  }
};


