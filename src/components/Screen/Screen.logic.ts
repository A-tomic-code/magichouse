import { UserState } from "../../types/user";

export function verifySession(user: UserState) {
	return user.id !== null;
}
