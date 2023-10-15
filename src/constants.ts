import { Platform } from "react-native";
export const isWeb = Platform.OS === "web";
export const isDev = process.env.NODE_ENV === "development";
export const API_URL = isDev
	? "http://192.168.1.138:8000/"
	: "https://api.example.com/";
