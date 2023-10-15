import { API_URL } from "./../constants";
import { ApiResponse } from "../types/response";
import axios from "axios";
import { LoginData } from "../types/request";

export const authenticateUser = ({ email, password }: LoginData) => {
	return axios.post(`${API_URL}login`, { email, password });
};
