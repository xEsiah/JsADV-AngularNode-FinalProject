import { Request, Response, NextFunction } from "express";
import jsonwt from "jsonwebtoken";

export const authMiddleware = (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decodedToken: any = jsonwt.verify(
      token,
      "3bdb18ae95724064d78bc6555af763c9"
    );

    const userId = decodedToken.userId;

    req.authMiddleware = { userId };

    next();
  } catch (error) {
    res.status(401).json({ error: "Requête non authentifiée !" });
  }
};
