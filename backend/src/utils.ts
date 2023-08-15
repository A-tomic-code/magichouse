import { Response } from "express";
import bcrypt from "bcrypt";

export function sendOK(response: Response, data: any) {
	response.send({
		status: "success",
		data: typeof data !== "object" ? [data] : data
	});
}

export function sendError(response: Response, message: string) {
	response.status(500).send({
		status: "error",
		data: [message]
	});
}

export async function crypt(data: string): Promise<string> {
	const saltRounds = 10;

	try {
		return await bcrypt.hash(data, saltRounds);
	} catch (err) {
		console.error(err);
	}

	return "";
}
