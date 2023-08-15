import { StyleSheet, Text } from "react-native";
import colorPallete from "../../styles/colorPallete";
import { Pressable } from "react-native";
import { isWeb } from "../../constants";
import { StyledButtonProps } from "../../types";
import { StyledText } from "./StyledText.component";

export const StyledButton = ({
	children,
	secondary,
	onPress,
	style,
}: StyledButtonProps) => {
	const styles = StyleSheet.create({
		button: {
			justifyContent: "center",
			width: "100%",
			height: 45,
			backgroundColor: colorPallete.primary,
			padding: 10,
			borderRadius: 5,
			paddingHorizontal: 24,
		},
	});

	const buttonStyles = [styles.button];

	return (
		<Pressable style={buttonStyles} onPress={onPress}>
			<StyledText white>{children}</StyledText>
		</Pressable>
	);
};
