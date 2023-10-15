import { useAppDispatch } from "./../store";
import { LoginData } from "../types/request";
import { authenticateUser } from "../services/User.service";
import { LOGIN } from "../slices/user.slice";
export const useUser = () => {
	const dispatch = useAppDispatch();

	const login = async ({ email, password }: LoginData) => {
		try {
			const response = await authenticateUser({ email, password });
			if (response.data.status === "success") {
				dispatch(LOGIN(response.data.data));
			} else {
				throw new Error("Invalid credentials");
			}
			return response;
		} catch (error) {
			console.error(error);
		}
	};

	return {
		login,
	};
};
