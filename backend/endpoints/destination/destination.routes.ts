import express from "express";
import * as destinationCtrl from "./destination.controller";
import { authMiddleware } from "../../middleware/auth";

const router = express.Router();

router.get("/", destinationCtrl.getAllDestinations);
router.post("/", destinationCtrl.createDestination);
router.get("/:id", destinationCtrl.getOneDestination);
router.put("/:id", destinationCtrl.modifyDestination);
router.delete("/:id", destinationCtrl.deleteDestination);

export default router;
