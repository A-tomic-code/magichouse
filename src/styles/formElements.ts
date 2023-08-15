import { TextStyle, ViewStyle } from "react-native";
import colorPallete from "./colorPallete";

const baseStyle: ViewStyle = {
	width: "100%",
	height: 50,

	borderColor: colorPallete.primary,

	padding: 10,
	borderRadius: 10,

	borderWidth: 1,
	paddingHorizontal: 24,
};

export const textInput: TextStyle = {
	...baseStyle,
	color: colorPallete.primary,
};
