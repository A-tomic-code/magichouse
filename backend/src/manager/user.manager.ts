import { crypt } from "../utils";
import { User } from "../types/user";
import * as db from "../db";

export async function getAll() {
	const sql = "SELECT id, email, username FROM user";
	const rows = db.select(sql);
	return rows;
}

export async function getById(id: number) {
	const sql = "SELECT id, email, username FROM user WHERE id = ?";
	return new Promise(async (resolve, reject) => {
		try {
			const result = await db.select(sql, [id]);

			if (result && result.length === 0) {
				reject(`User not found with id --> ${id}`);
			}

			resolve(result);
		} catch (err) {
			console.error("[Database] ❌ ERROR GETTING USER BY ID ");
			console.error(err);
			reject(err);
		}
	});
}

export async function getByEmail(email: string) {
	const sql = "SELECT id, email, password, username FROM user WHERE email = ?";
	const rows = db.select(sql, [email]);
	return rows;
}

export async function getByUsername(username: string) {
	const sql = "SELECT id, email, password, username FROM user WHERE username = ?";
	const rows = db.select(sql, [username]);
	return rows;
}

export async function create(user: User, password: string) {
	if (!user.email || !user.username) {
		throw new Error("Email and username are required");
	}

	const passwordHash = await crypt(password);
	if (!passwordHash) {
		throw new Error("Error while hashing password");
	}

	const sql = "INSERT INTO user (email, password, username) VALUES (?, ?, ?)";

	return new Promise(async (resolve, reject) => {
		try {
			const result = await db.insert(sql, [user.email, passwordHash, user.username]);
			resolve(result);
		} catch (err) {
			console.error("[Database] ❌ ERROR INSERTING USER ");
			console.error(err);
			reject(err);
		}
	});
}

export async function update(id: number, newUser: User) {
	const sql = "UPDATE user SET email = ?, username = ? WHERE id = ?";
	const params = [newUser.email, newUser.username, id];
	const result = db.update(sql, params);

	return result;
}

export async function remove(id: number) {
	const sql = "DELETE FROM user WHERE id = ?";
	const result = db.deleteRecord(sql, [id]);

	return result;
}
