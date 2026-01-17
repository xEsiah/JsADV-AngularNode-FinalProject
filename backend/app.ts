import "dotenv/config";

import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

import destinationRoutes from "./endpoints/destination/destination.routes";
import userRoutes from "./endpoints/user/user.routes";

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/destination", destinationRoutes);
app.use("/api/auth", userRoutes);

// Connexion BDD
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Db connected !");
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch((err) => console.log("Erreur de connexion :", err));

export default app;
