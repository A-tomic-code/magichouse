import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const dbConfig = {
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	port: parseInt(process.env.MYSQL_PORT as string),
	connectionLimit: 10,
};

export function connect() {
	const connection = mysql.createPool(dbConfig);
	return connection;
}
