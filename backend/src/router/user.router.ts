import { Router } from "express";
import * as UserCtrl from "../controller/user.controller";

const router = Router();

router.route("/user").get(UserCtrl.getUser);

export default router;
