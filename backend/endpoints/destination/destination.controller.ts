import { Response } from "express";
import { AuthRequest } from "../../interfaces";
import Destination from "./destination.model";

export const createDestination = (req: AuthRequest, res: Response) => {
  const userId = req.auth?.userId;

  const destination = new Destination({
    ...req.body,
    userId: userId,
  });

  destination
    .save()
    .then(() => res.status(201).json({ message: "Destination enregistrée !" }))
    .catch((error: Error) => res.status(400).json({ error }));
};

export const getAllDestinations = (req: AuthRequest, res: Response): void => {
  const userId = req.auth?.userId;

  Destination.find({ userId })
    .then((destinations) => res.status(200).json(destinations))
    .catch((error: Error) => res.status(400).json({ error }));
};

export const getOneDestination = (req: AuthRequest, res: Response): void => {
  Destination.findOne({ _id: req.params.id })
    .then((destination) => {
      if (!destination)
        return res.status(404).json({ message: "Destination non trouvée" });

      // Vérification simplifiée
      if (destination.userId !== req.auth?.userId) {
        return res.status(403).json({ message: "Action non autorisée" });
      }

      res.status(200).json(destination);
    })
    .catch((error: Error) => res.status(404).json({ error }));
};

export const modifyDestination = (req: AuthRequest, res: Response): void => {
  const userId = req.auth?.userId;
  Destination.findOne({ _id: req.params.id })
    .then((destination) => {
      if (!destination) {
        res.status(404).json({ message: "Destination non trouvée" });
        return null;
      }
      if (destination.userId !== userId) {
        res.status(403).json({ message: "Action non autorisée" });
        return null;
      }
      return Destination.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id },
      );
    })
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Destination modifiée !" });
      }
    })
    .catch((error: Error) => res.status(500).json({ error }));
};

export const deleteDestination = (req: AuthRequest, res: Response): void => {
  const userId = req.auth?.userId;
  Destination.findOne({ _id: req.params.id })
    .then((destination) => {
      if (!destination) {
        res.status(404).json({ message: "Destination non trouvée" });
        return null;
      }
      if (destination.userId !== userId) {
        res.status(403).json({ message: "Requête non autorisée !" });
        return null;
      }
      return Destination.deleteOne({ _id: req.params.id });
    })
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Destination supprimée !" });
      }
    })
    .catch((error: Error) => res.status(500).json({ error }));
};
