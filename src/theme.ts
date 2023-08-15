import { StyledTextStyle } from "./types";

import { StyleSheet, Platform } from "react-native";
import { container } from "./styles/container.style";
import { loginForm } from "./styles/loginForm.style";
import { button } from "./styles/button.style";

import * as Layout from "./styles/layout.style";
import * as FormElements from "./styles/formElements";
import * as loginScreen from "./styles/loginScreen.style";
import colorPallete from "./styles/colorPallete";
import { isWeb } from "./constants";

// GLOBAL STYLES

export default StyleSheet.create({
	...Layout,
	...FormElements,
	...loginScreen,

	container,
	loginForm,
	button,
});

// FONT FAMILY

export const fontFamily = {
	"Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
	"Roboto-BlackItalic": require("./assets/fonts/Roboto-BlackItalic.ttf"),

	"Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
	"Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),

	"Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
	"Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
	"Roboto-LightItalic": require("./assets/fonts/Roboto-LightItalic.ttf"),

	"Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
	"RobotoMedium-Italic": require("./assets/fonts/Roboto-MediumItalic.ttf"),

	"Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
};

// TEXT STYLES

export const textStyle = StyleSheet.create({
	text: {
		fontFamily: Platform.select({
			web: "Roboto-Regular",
			ios: "Roboto-Regular",
			android: "Roboto",
		}),
		fontSize: 16,
		color: colorPallete.primary,
		letterSpacing: 1,
		width: "100%",
	},
	heading: {
		fontFamily: Platform.select({
			web: "Roboto-Black",
			ios: "Roboto-Black",
			android: "Roboto",
		}),
		fontSize: 72,
		color: colorPallete.secondary,
		fontWeight: isWeb ? null : "600",
	},
	title: {
		fontFamily: Platform.select({
			web: "Roboto-Bold",
			ios: "Roboto-Bold",
			android: "Roboto",
		}),
		fontSize: 40,
		letterSpacing: 1.5,
	},
	subtitle: {
		fontFamily: Platform.select({
			web: "Roboto-Medium",
			ios: "Roboto-Medium",
			android: "Roboto",
		}),
		fontSize: 32,
		fontWeight: isWeb ? null : "400",
		letterSpacing: 3,
	},
	big: {
		fontSize: 24,
	},
	small: {
		fontSize: 12,
	},
	bold: {
		fontFamily: Platform.select({
			web: "Roboto-Bold",
			ios: "Roboto-Bold",
			android: "Roboto-Bold",
		}),
		fontWeight: isWeb ? null : "bold",
	},
	white: {
		color: "white",
	},
	centered: {
		textAlign: "center",
	},
} as StyledTextStyle);
