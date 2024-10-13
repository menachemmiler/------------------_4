
export default interface TokenPaloadDTO {
  password: string;
  name: string;
  role: "student" | "teacher";
  _id?:string
}
