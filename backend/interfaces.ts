import { Request } from "express";

export interface AuthRequest extends Request {
  auth?: {
    userId: string;
  };
}

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  username: string;
  friends: string[];
  pfpUrl?: string;
}
