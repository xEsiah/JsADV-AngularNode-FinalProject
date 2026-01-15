import { Request, Response } from "express";
import Destination from "./destination.model";

export const createDestination = (req: Request, res: Response): void => {
  const destination = new Destination({ ...req.body });
  destination
    .save()
    .then(() => res.status(201).json({ message: "Destination enregistrée !" }))
    .catch((error) => res.status(400).json({ error }));
};

export const getAllDestinations = (req: Request, res: Response): void => {
  Destination.find()
    .then((destinations) => res.status(200).json(destinations))
    .catch((error) => res.status(400).json({ error }));
};

export const getOneDestination = (req: Request, res: Response): void => {
  Destination.findOne({ _id: req.params.id })
    .then((destination) => res.status(200).json(destination))
    .catch((error) => res.status(404).json({ error }));
};

export const modifyDestination = (req: Request, res: Response): void => {
  Destination.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Destination modifiée !" }))
    .catch((error) => res.status(400).json({ error }));
};

export const deleteDestination = (req: Request, res: Response): void => {
  Destination.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Destination supprimée !" }))
    .catch((error) => res.status(400).json({ error }));
};
