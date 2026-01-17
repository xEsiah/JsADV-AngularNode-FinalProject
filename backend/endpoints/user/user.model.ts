import mongoose, { Schema } from "mongoose";
import { UserDocument } from "../../interfaces";

export interface IUser extends UserDocument, Document {}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  friends: [{ type: String, required: false }],
  pfpUrl: { type: String, required: false },
});

export default mongoose.model<IUser>("User", userSchema, "User");
