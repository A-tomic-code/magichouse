import { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useAppSelector } from "../../store";
import theme from "../../theme";
import { ScreenProps } from "../../types/components";
import { verifySession } from "./Screen.logic";
import Header from "../Header/Header";

export const Screen = ({ children, style }: ScreenProps) => {
	const styles = [theme.screen, style];
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.user);

	// useEffect(() => {
	// 	if (!verifySession(user)) {
	// 		setTimeout(() => {
	// 			navigate("/");
	// 		}, 1000);
	// 	}
	// }, []); m

	if (!verifySession(user)) return <Text>EXPIRED</Text>;

	return (
		<View style={styles}>
			<Header />
			{children}
		</View>
	);
};
