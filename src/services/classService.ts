import { Schema } from "mongoose";
import classModel, { IClass } from "../models/classModel";
import bcrypt from "bcryptjs";

//create a new class
export const createClassService = async (
  classData: IClass
): Promise<IClass> => {
  try {
    const { teachername, teacheremail, teacherpassword, classname } = classData;
    if (!teachername || !teacheremail || !teacherpassword || !classname)
      throw new Error("missing info");
    const hashPassword = await bcrypt.hash(teacherpassword, 10);
    const newClass = new classModel({
      teachername: teachername,
      teacheremail: teacheremail,
      teacherpassword: hashPassword,
      classname: classname,
    });
    const savedClass = await newClass.save();
    return savedClass;
  } catch (err: any) {
    throw err;
  }
};
