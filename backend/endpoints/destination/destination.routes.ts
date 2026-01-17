import express from "express";
import * as destinationCtrl from "./destination.controller";
import { authMiddleware } from "../../middleware/auth";

const router = express.Router();

router.get("/", authMiddleware, destinationCtrl.getAllDestinations);
router.post("/", authMiddleware, destinationCtrl.createDestination);
router.get("/:id", authMiddleware, destinationCtrl.getOneDestination);
router.put("/:id", authMiddleware, destinationCtrl.modifyDestination);
router.delete("/:id", authMiddleware, destinationCtrl.deleteDestination);

export default router;
