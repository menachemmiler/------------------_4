import { Schema } from "mongoose";
import classModel, { IClass } from "../models/classModel";

//create a new class
export const createClassService = async (
  classData: IClass
): Promise<IClass> => {
  try {
    const { teachername, teacheremail, teacherpassword, classname } = classData;
    if (!teachername || !teacheremail || !teacherpassword || !classname)
      throw new Error("missing info");
    const newClass = new classModel({
      teachername: teachername,
      teacheremail: teacheremail,
      teacherpassword: teacherpassword,
      classname: classname,
    });
    const savedClass = await newClass.save();
    return savedClass;
  } catch (err: any) {
    throw err;
  }
};
