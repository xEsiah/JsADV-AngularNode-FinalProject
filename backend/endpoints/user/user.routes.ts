import express from "express";
import * as userCtrl from "./user.controller";

const router = express.Router();

router.post("/register", userCtrl.signup);
router.post("/login", userCtrl.login);

export default router;
