import mongoose, { Schema } from "mongoose";

export interface IDestination extends Document {
  country: string;
  imageUrl: string;
  budget: number;
  isVisited: boolean;
  cities: string[];
  userId: string;
}

const destinationSchema: Schema = new Schema({
  country: { type: String, required: true },
  imageUrl: { type: String, required: true },
  budget: { type: Number, required: true },
  isVisited: { type: Boolean, default: false },
  cities: [{ type: String }],
  userId: { type: String, required: true },
});

export default mongoose.model<IDestination>(
  "Destination",
  destinationSchema,
  "Destination",
);
