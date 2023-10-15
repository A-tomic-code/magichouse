// import dotenv from "dotenv";
// import mysql from "mysql2/promise";

// dotenv.config();

// const DBConfig = {
// 	host: process.env.MYSQL_HOST,
// 	user: process.env.MYSQL_USER,
// 	password: process.env.MYSQL_PASSWORD,
// 	database: process.env.MYSQL_DATABASE,
// 	port: parseInt(process.env.MYSQL_PORT as string),
// 	connectionLimit: 10,
// };

import sqlite3, { Database, RunResult } from "sqlite3";

const DB = connect();

function connect(): Database {
	return new sqlite3.Database("./DB.sqlite", onConnectSuccess);
}

function onConnectSuccess(err: Error | null): void {
	if (err) {
		console.log("Error connecting to the database.");
		return;
	}

	console.log("[Database] ✅ Connected to the database.");
}

function queryCallback(
	result: RunResult | unknown[],
	err: Error | null,
	resolve: (value: any) => void,
	reject: (reason?: any) => void
): void {
	if (err) {
		console.error("[Database] ❌ Error querying the database.");
		console.error(err.message);
		reject(err);
	} else {
		console.log("[Database] ✅ Query successful.");

		if ("lastID" in result) {
			resolve(result.lastID ?? null);
		} else {
			resolve(result ?? null);
		}
	}
}

function select(sql: string, params: any[] = []): Promise<any[] | null> {
	return new Promise((resolve, reject) => {
		DB.all(sql, params, function (err, rows) {
			queryCallback(rows, err, resolve, reject);
		});
	});
}

// function insert(sql: string, params: any[] = []): Database | null {
// 	return DB.run(sql, params, queryCallback);
// }

function insert(sql: string, params: any[] = []): Promise<number | null> {
	return new Promise((resolve, reject) => {
		DB.run(sql, params, function (err) {
			queryCallback(this, err, resolve, reject);
		});
	});
}

function update(sql: string, params: any[] = []): Promise<number | null> {
	return new Promise((resolve, reject) => {
		DB.run(sql, params, function (err) {
			queryCallback(this, err, resolve, reject);
		});
	});
}

function deleteRecord(sql: string, params: any[] = []): Promise<number | null> {
	return new Promise((resolve, reject) => {
		DB.run(sql, params, function (err) {
			queryCallback(this, err, resolve, reject);
		});
	});
}

export { select, insert, update, deleteRecord };
