import { ViewStyle } from "react-native";
import colorPallete from "./colorPallete";

export const root: ViewStyle = {
	flex: 1,
	width: "100%",
	minHeight: "100%",
};

export const screen: ViewStyle = {
	flex: 1,
	width: "100%",
	height: "100%",
	padding: "5%",
	justifyContent: "flex-start",
	alignItems: "center",
	backgroundColor: colorPallete.background,
};
