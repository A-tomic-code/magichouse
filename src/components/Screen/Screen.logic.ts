import { UserState } from "../../types.d";

export function verifySession(user: UserState) {
	return user.id !== null;
}
