import { API_URL } from "./../constants";
import { LoginData, ApiResponse } from "../types";
import axios from "axios";

export const authenticateUser = ({ email, password }: LoginData) => {
	return axios.post(`${API_URL}login`, { email, password });
};
