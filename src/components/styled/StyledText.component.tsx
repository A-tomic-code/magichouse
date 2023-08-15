import { Text } from "react-native";
import { StyledTextProps } from "../../types";
import { textStyle } from "../../theme";

export const StyledText = ({
	children,
	heading,
	title,
	subtitle,
	big,
	small,
	bold,
	style,
	white,
	centered,
}: StyledTextProps) => {
	const textStyles = [
		textStyle.text,
		heading && textStyle.heading,
		title && textStyle.title,
		subtitle && textStyle.subtitle,
		big && textStyle.big,
		small && textStyle.small,
		bold && textStyle.bold,
		style && style,
		white && textStyle.white,
		centered && textStyle.centered,
	];

	return <Text style={textStyles}>{children}</Text>;
};
