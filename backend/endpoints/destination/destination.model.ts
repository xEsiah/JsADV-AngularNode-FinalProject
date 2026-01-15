import mongoose, { Schema, Document } from "mongoose";

export interface IDestination extends Document {
  id: string;
  country: string;
  imageUrl: string;
  budget: number;
  isVisited: boolean;
}

const destinationSchema: Schema = new Schema({
  id: { type: String, required: true },
  country: { type: String, required: true },
  imageUrl: { type: String, required: true },
  budget: { type: Number, required: true },
  isVisited: { type: Boolean, default: false, required: true },
});

export default mongoose.model<IDestination>(
  "Destination",
  destinationSchema,
  "Destination"
);
