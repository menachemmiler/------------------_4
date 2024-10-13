import studentModel from "../models/studentModel";
import jsonwebtoken from "jsonwebtoken";
import TokenPaloadDTO from "../types/DTO/paloadTokenDTO";
import bcrypt from "bcryptjs";
import classModel, { IClass } from "../models/classModel";


export const loginStudentService = async (
  userDetailse: TokenPaloadDTO
): Promise<string> => {
  try {
    const { name, password } = userDetailse;
    if (!name || !password) throw new Error("missing info");
    const dbStudent = await studentModel.findOne({
      name: name,
    });
    if (!dbStudent) {
      throw new Error("student not found");
    }
    if (!(await bcrypt.compare(password, dbStudent.password))) {
      throw new Error("Wrong password!!!");
    }
    const token = jsonwebtoken.sign(
      {
        name: dbStudent.name,
        password: dbStudent.password,
        role: "student",
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "10m",
      }
    );
    return token;
  } catch (err: any) {
    throw err;
  }
};

//login teacher
export const loginTeacherService = async (
  userDetailse: TokenPaloadDTO
): Promise<string> => {
  try {
    const { name, password } = userDetailse;
    if (!name || !password) throw new Error("missing info");
    const dbTeacher:IClass | null = await classModel.findOne({
      teachername: userDetailse.name,
    });
    if (!dbTeacher) {
      throw new Error("User not found");
    }
    if (!(await bcrypt.compare(password, dbTeacher.teacherpassword))) {
      throw new Error("Wrong password!!!");
    }
    const token = jsonwebtoken.sign(
      {
        name: dbTeacher.teachername,
        password: dbTeacher.teacherpassword,
        role: "teacher",
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "10m",
      }
    );
    return token;
  } catch (err: any) {
    throw err;
  }
};
