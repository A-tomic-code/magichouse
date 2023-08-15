import { Platform } from "react-native";

export const platform = Platform.OS;
export const isWeb = platform === "web";
export const isDev = process.env.NODE_ENV === "development";
export const API_URL = isDev
	? "http://192.168.1.138:8000/"
	: "https://api.example.com/";
