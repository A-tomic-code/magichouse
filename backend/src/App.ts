import cors from "cors";
import express, { Application } from "express";

import loginRouter from "./router/login.router";
import registerRouter from "./router/register.router";
import testRouter from "./router/test.router";
import userRouter from "./router/user.router";

export class App {
	private app: Application;

	constructor(private port?: number | string) {
		this.app = express();
		this.setting();
	}

	setting() {
		this.app.set("port", this.port || process.env.PORT || 3000);
		this.setMiddlewares();
		this.setRoutes();
	}

	async listen() {
		this.app.listen(this.app.get("port"), () => {
			console.log(`[server]: Server is running at http://localhost:${this.app.get("port")}`);
		});
	}

	private setMiddlewares() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(cors());
	}

	private setRoutes() {
		this.app.use(loginRouter);
		this.app.use(registerRouter);
		this.app.use(userRouter);
		this.app.use(testRouter);
	}
}
