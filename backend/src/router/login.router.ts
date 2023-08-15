import { Router } from "express";
import * as UserCtrl from "../controller/user.controller";

const router = Router();

router.route("/login").post(UserCtrl.login);

export default router;
