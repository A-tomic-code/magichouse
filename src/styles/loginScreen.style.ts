import { ViewStyle, ImageStyle } from "react-native";
import { isWeb } from "../constants";

export const loginScreen: ViewStyle = {
	justifyContent: "center",
};

export const loginScreenImage: ImageStyle = {
	height: 100,
	width: "100%",
	resizeMode: "contain",
};

export const loginScreenWrapper: ViewStyle = {
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
};
export const loginScreenFormWrapper: ViewStyle = {
	alignItems: "center",
	width: "50%",
};
export const loginScreenImageWrappwer: ViewStyle = {
	justifyContent: "center",
	alignItems: "center",
	width: "50%",
	height: "100%",
};
