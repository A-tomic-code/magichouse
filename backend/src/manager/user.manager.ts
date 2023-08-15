import { connect } from "../db";
import { crypt } from "../utils";
import { ResultSetHeader, RowDataPacket } from "mysql2";
import { DBResult_User, User } from "../model/User.interface";

const connection = connect();

export async function getAll(): Promise<DBResult_User[]> {
	const sql = "SELECT id, email, username FROM user";
	const [rows] = await connection.execute<DBResult_User[]>(sql);
	return rows;
}

export async function getById(id: number): Promise<DBResult_User[]> {
	const sql = "SELECT id, email, username FROM user WHERE id = ?";
	const [rows] = await connection.execute<DBResult_User[]>(sql, [id]);
	return rows;
}

export async function getByEmail(email: string): Promise<DBResult_User[]> {
	const sql = "SELECT id, email, password, username FROM user WHERE email = ?";
	const [rows] = await connection.execute<DBResult_User[]>(sql, [email]);
	return rows;
}

export async function getByUsername(username: string): Promise<DBResult_User[]> {
	const sql = "SELECT id, email, password, username FROM user WHERE username = ?";
	const [rows] = await connection.execute<DBResult_User[]>(sql, [username]);
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

	const [result] = await connection.execute<ResultSetHeader>(sql, [
		user.email,
		passwordHash,
		user.username
	]);

	console.log("result", result.insertId);

	return result;
}

export async function update(id: number, newUser: User): Promise<RowDataPacket[]> {
	const sql = "UPDATE user SET email = ?, username = ? WHERE id = ?";
	const params = [newUser.email, newUser.username, id];
	const [result] = await connection.execute<RowDataPacket[]>(sql, params);

	return result;
}

export async function remove(id: number): Promise<RowDataPacket[]> {
	const sql = "DELETE FROM user WHERE id = ?";
	const [result] = await connection.execute<RowDataPacket[]>(sql, [id]);

	return result;
}
