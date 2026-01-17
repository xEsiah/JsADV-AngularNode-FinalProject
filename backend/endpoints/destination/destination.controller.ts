import { Request, Response } from "express";
import Destination from "./destination.model";

interface AuthRequest extends Request {
  auth?: {
    userId: string;
  };
}

export const createDestination = (req: AuthRequest, res: Response) => {
  // Sécurité : On vérifie si auth existe
  if (!req.auth) {
    return res.status(401).json({ message: "Non authentifié" });
  }

  const destinationObject = {
    ...req.body,
    userId: req.auth.userId,
  };

  const destination = new Destination(destinationObject);

  destination
    .save()
    .then(() => res.status(201).json({ message: "Destination enregistrée !" }))
    .catch((error: Error) => res.status(400).json({ error }));
};

export const getAllDestinations = (req: AuthRequest, res: Response): void => {
  if (!req.auth) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  Destination.find({ userId: req.auth.userId })
    .then((destinations) => res.status(200).json(destinations))
    .catch((error: Error) => res.status(400).json({ error }));
};

export const deleteDestination = (req: AuthRequest, res: Response): void => {
  if (!req.auth) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  Destination.findOne({ _id: req.params.id })
    .then((destination: any) => {
      if (!destination) {
        return res.status(404).json({ message: "Destination non trouvée" });
      }
      if (destination.userId !== req.auth!.userId) {
        return res.status(403).json({ message: "Requête non autorisée !" });
      }

      Destination.deleteOne({ _id: req.params.id })
        .then(() =>
          res.status(200).json({ message: "Destination supprimée !" })
        )
        .catch((error: Error) => res.status(400).json({ error }));
    })
    .catch((error: Error) => res.status(500).json({ error }));
};

export const getOneDestination = (req: AuthRequest, res: Response): void => {
  if (!req.auth) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  Destination.findOne({ _id: req.params.id })
    .then((destination: any) => {
      if (!destination) {
        return res.status(404).json({ message: "Destination non trouvée" });
      }
      if (destination.userId !== req.auth!.userId) {
        return res.status(403).json({ message: "Action non autorisée" });
      }
      res.status(200).json(destination);
    })
    .catch((error: Error) => res.status(404).json({ error }));
};

export const modifyDestination = (req: AuthRequest, res: Response): void => {
  if (!req.auth) {
    res.status(401).json({ message: "Non authentifié" });
    return;
  }

  Destination.findOne({ _id: req.params.id })
    .then((destination: any) => {
      if (!destination) {
        return res.status(404).json({ message: "Destination non trouvée" });
      }
      if (destination.userId !== req.auth!.userId) {
        return res.status(403).json({ message: "Action non autorisée" });
      }
      Destination.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
      )
        .then(() => res.status(200).json({ message: "Destination modifiée !" }))
        .catch((error: Error) => res.status(400).json({ error }));
    })
    .catch((error: Error) => res.status(500).json({ error }));
};
