import mongoose, { Schema } from "mongoose";

const destinationSchema: Schema = new Schema({
  country: { type: String, required: true },
  imageUrl: { type: String, required: true },
  budget: { type: Number, required: true },
  isVisited: { type: Boolean, default: false },
  cities: [{ type: String }], // Ajout du tableau de villes
  userId: { type: String, required: true },
});

export default mongoose.model("Destination", destinationSchema, "Destination");
