import classModel from "../models/classModel";
import studentModel, { IStudent } from "../models/studentModel";

//create a new student
export const createStudentService = async (
  studentData: IStudent
): Promise<IStudent> => {
  try {
    const { name, email, password, classId } = studentData;
    if (!name || !email || !password || !classId)
      throw new Error("missing info");
    const newStudent = new studentModel(studentData);
    const savedStudent = await newStudent.save();
    //find is class and add im to ref of list students in the class
    const dbClass = await classModel.findOne(
      { _id: classId },
      {
        $addToSet: { students: savedStudent._id },
      }
    );
    if (!dbClass) throw new Error("class not found");
    return savedStudent;
  } catch (err: any) {
    throw err;
  }
};
