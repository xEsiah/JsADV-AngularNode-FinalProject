import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthRequest } from "../interfaces";

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Token absent");
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!,
    ) as JwtPayload;
    req.auth = {
      userId: decodedToken.userId,
    };
    next();
  } catch (error) {
    res.status(401).json({ error: "Requête non authentifiée !" });
  }
};
