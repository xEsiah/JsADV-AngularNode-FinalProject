import mongoose, { Schema, Document } from "mongoose";

export interface IDestination extends Document {
  country: string;
  imageUrl: string;
  budget: number;
  isVisited: boolean;
}

const destinationSchema: Schema = new Schema({
  country: { type: String, required: true },
  imageUrl: { type: String, required: true },
  budget: { type: Number, required: true },
  isVisited: { type: Boolean, default: false },
});

export default mongoose.model<IDestination>(
  "Destination",
  destinationSchema,
  "Destination"
);
