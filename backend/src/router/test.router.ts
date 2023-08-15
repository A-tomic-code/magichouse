import { Request, Response, Router } from "express";
import * as userModel from "../manager/user.manager";
import { User } from "../model/User.interface";

const router = Router();

// const testFunc = async (req: Request, res: Response) => {
// 	try {
// 		const userPartial: Partial<User> = {
// 			email: "test",
// 			username: "test"
// 		};
// 		const x = await userModel.create(userPartial, "test");
// 		res.send(x);
// 	} catch (error) {
// 		console.error("Error:", error);
// 		res.status(500).send("Internal Server Error");
// 	}
// };

router.route("/test").post(() => {});
export default router;
