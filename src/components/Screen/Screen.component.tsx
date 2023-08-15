import { useEffect } from "react";
import { Text, View } from "react-native";
import { useNavigate } from "react-router-native";
import { useAppSelector } from "../../store";
import theme from "../../theme";
import { ScreenProps } from "../../types";
import { verifySession } from "./Screen.logic";

export const Screen = ({ children, style }: ScreenProps) => {
	const styles = [theme.screen, style];
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.user);

	useEffect(() => {
		if (!verifySession(user)) {
			setTimeout(() => {
				navigate("/");
			}, 1000);
		}
	}, []);

	if (!verifySession(user)) return <Text>EXPIRED</Text>;

	return <View style={styles}>{children}</View>;
};
