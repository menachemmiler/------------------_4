import studentModel from "../models/studentModel";
import jsonwebtoken from "jsonwebtoken";
import TokenPaloadDTO from "../types/DTO/paloadTokenDTO";
import classModel from "../models/classModel";

export const loginUser = async (
  userDetailse: TokenPaloadDTO
): Promise<string> => {
  try {
    const dbClass = await classModel.findOne({
      teacherpassword: userDetailse.password,
      teachername: userDetailse.name,
    });
    let token = "";
    if (dbClass) {
      token = jsonwebtoken.sign(
        {
          name: dbClass.teacheremail,
          password: dbClass.teacherpassword,
          role: "teacher",
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "10m",
        }
      );
    }
    //if he is not e teacher he is a student
    const dbStudent = await studentModel.findOne({
      password: userDetailse.password,
      name: userDetailse.name,
    });
    if (!dbStudent) throw new Error("user not found");
    if (dbStudent) {
      token = jsonwebtoken.sign(
        {
          name: dbStudent.email,
          password: dbStudent.password,
          role: "student",
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "10m",
        }
      );
    }
    return token;
  } catch (err: any) {
    throw err;
  }
};
