import { RowDataPacket } from "mysql2";

export interface User {
	id?: number | null;
	email: string;
	username: string;
}

export interface DBResult_User extends RowDataPacket, User {}
