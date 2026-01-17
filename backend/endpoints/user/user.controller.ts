import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./user.model";

const SECRET_KEY = process.env.JWT_SECRET!;

export const signup = (req: Request, res: Response) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        ...req.body,
        password: hash,
        friends: [],
      });
      return user.save();
    })
    .then((newUser) => {
      const token = jwt.sign({ userId: newUser._id }, SECRET_KEY, {
        expiresIn: "24h",
      });

      res.status(201).json({
        message: "Utilisateur créé !",
        userId: newUser._id,
        token: token,
        username: newUser.username,
        friends: newUser.friends,
        pfpUrl: newUser.pfpUrl,
      });
    })
    .catch((error: any) => {
      if (error.code === 11000) {
        return res
          .status(400)
          .json({ error: "Email ou Pseudo déjà utilisé !" });
      }
      res.status(500).json({ error });
    });
};

export const login = (req: Request, res: Response) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Identifiants invalides !" });
      }
      return bcrypt.compare(req.body.password, user.password).then((valid) => {
        if (!valid) {
          return res.status(401).json({ error: "Identifiants invalides !" });
        }
        res.status(200).json({
          userId: user._id,
          token: jwt.sign({ userId: user._id }, SECRET_KEY, {
            expiresIn: "24h",
          }),
          username: user.username,
          pfpUrl: user.pfpUrl,
          friends: user.friends,
        });
      });
    })
    .catch((error: Error) => res.status(500).json({ error }));
};
