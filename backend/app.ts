import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import destinationRoutes from "./endpoints/destination/destination.routes";

dotenv.config();

const app: Application = express();
const port = 3000;

// Middlewares de base
app.use(cors());
app.use(express.json());

app.use("/api/destination", destinationRoutes);

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
