import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface ITest extends Document {
  testname: string;
  score?: string;
}

const TestSchema = new Schema({
  testname: {
    type: String,
  },
  score: {
    type: String,
    default: "0",
  },
});

export interface IStudent extends Document {
  name: string; 
  email: string; 
  password: string;
  class: Schema.Types.ObjectId;//רפרנס למזהה של הכיתה שלו
  //list of tests
  tests?: ITest[];
}

const StudentSchema = new Schema<IStudent>({
  name: {
    type: String,
    required: [true, "name is required!"],
  },
  email: {
    type: String,
    required: [true, "email is required!"],
  },
  password: {
    type: String,
    required: [true, "password is required!"],
  },
  class: {
    //משתמש מחזיק מערך של פוסטים )רפרנסים(
    type: Schema.Types.ObjectId,
    ref: "Class",
  },
  tests: {//רשימה של מבחנים של אותו תלמיד
    type: [TestSchema],
  },
});

export default mongoose.model<IStudent>("Student", StudentSchema);
