// import studentModel, { IStudent } from "../models/studentModel";

// //create a new student
// export const createStudentService = async (
//   studentData: IStudent
// ): Promise<IStudent> => {
//   try {
//     const newStudent = new studentModel(studentData);
//     const savedStudent = await newStudent.save();
//     return savedStudent;
//   } catch (err: any) {
//     throw err;
//   }
// };