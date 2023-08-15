import { Request, Response } from "express";
import { sendError, sendOK } from "../utils";
import * as userModel from "../manager/user.manager";

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

export async function create(req: Request, res: Response) {
	const { email, password, username } = req.body;

	try {
		const result = await userModel.create({ email, username }, password);

		if (result.insertId) {
			sendOK(res, `User succesfully inserted on DB with ID -> ${result.insertId}`);
		}
	} catch (err: any) {
		console.error(err);
		sendError(res, err.message);
	}
}

export async function getUser(req: Request, res: Response) {
	const id: number | null = Number(req.query.id);

	try {
		if (!isNaN(id)) {
			const result = await userModel.getById(id);
			result.length ? sendOK(res, result) : sendError(res, "User not found");
		} else {
			const result = await userModel.getAll();
			sendOK(res, result);
		}
	} catch (err: any) {
		sendError(res, err.message);
	}
}
