import { ViewStyle } from "react-native";
import { isWeb } from "../constants";
import colorPallete from "./colorPallete";

export const loginForm: ViewStyle = {
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	gap: 24,
	width: "100%",
	maxWidth: 600,

	backgroundColor: colorPallete.primary_translucid,
	borderColor: colorPallete.primary,

	borderWidth: 1,
	borderRadius: 10,

	paddingVertical: 64,
	paddingHorizontal: 32,

	shadowColor: colorPallete.primary,
	shadowOffset: {
		width: 0,
		height: 3,
	},
	shadowOpacity: 0.27,
	shadowRadius: 4.65,
};
