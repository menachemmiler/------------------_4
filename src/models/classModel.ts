import mongoose, { Schema, Document, Types } from "mongoose";

export interface IClass extends Document {
  teachername: string;
  teacheremail: string;
  teacherpassword: string;
  classname: string;
  students: Schema.Types.ObjectId[];
}


const PostSchema = new Schema<IClass>({
  teachername: {
    type: String,
    required: [true, "teacherName is required!"],
    minlength: [4, "title to be at last 4 chars"],
    unique: true,
  },
  teacheremail: {
    type: String,
    required: [true, "teacherEmail is required!"],
  },
  teacherpassword: {
    type: String,
    required: [true, "teacherPassword is required!"],
  },
  classname: {
    type: String,
    required: [true, "classname is required!"],
    unique: true,//ייחודי 
  },
  students: {
    type: [Schema.Types.ObjectId],
    ref: "Class",
    default: [],
  },
});

export default mongoose.model<IClass>("Class", PostSchema);
