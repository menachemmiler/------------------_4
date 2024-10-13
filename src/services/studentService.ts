import { Schema } from "mongoose";
import classModel from "../models/classModel";
import studentModel, { IStudent } from "../models/studentModel";
import bcrypt from "bcryptjs";

//create a new student
export const createStudentService = async (
  studentData: IStudent
): Promise<IStudent> => {
  try {
    const { name, email, password, classId } = studentData;
    if (!name || !email || !password || !classId)
      throw new Error("missing info");
    let hashPassword = await  bcrypt.hash(password, 10);
    const newStudent = new studentModel({
      name,
      email,
      password: hashPassword,
      classId,
    });
    const savedStudent = await newStudent.save();
    //find is class and add im to ref of list students in the class
    const dbClass = await classModel.updateOne(
      { _id: classId },
      {
        $push: { students: savedStudent._id },
      }
    );
    console.log(dbClass);
    return savedStudent;
  } catch (err: any) {
    throw err;
  }
};
