import { Request, Response } from "express";
import { sendError, sendOK } from "../utils";
import * as userManager from "../manager/user.manager";

export function login(req: Request, res: Response) {
	const { email, password } = req.body;

	if (email === "admin" && password === "admin") {
		sendOK(res, {
			id: 1,
			email
		});
	} else {
		sendError(res, "Invalid credentials");
	}
}

export async function register(req: Request, res: Response) {
	const { email, password, username } = req.body;

	try {
		const result = await userManager.create({ email, username }, password);
		sendOK(res, `User succesfully inserted on DB with ID -> ${result.insertId}`);
	} catch (err: any) {
		console.error(err);
		sendError(res, err.message);
	}
}

export async function getUser(req: Request, res: Response) {
	const id: number | null = Number(req.query.id);

	try {
		if (!isNaN(id)) {
			const result = await userManager.getById(id);
			result.length ? sendOK(res, result) : sendError(res, "User not found");
		} else {
			const result = await userManager.getAll();
			sendOK(res, result);
		}
	} catch (err: any) {
		sendError(res, err.message);
	}
}
