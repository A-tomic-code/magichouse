import dotenv from "dotenv";
import { App } from "./src/App";

dotenv.config();

async function main() {
	const app = new App();
	await app.listen();
}

main();
