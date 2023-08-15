import { Router } from "express";
import * as userCtrl from "../controller/user.controller";

const router = Router();

router.route("/register").post(userCtrl.register);

export default router;
