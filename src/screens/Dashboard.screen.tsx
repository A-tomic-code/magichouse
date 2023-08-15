import { Text, View } from "react-native";
import styles from "../theme";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-native";
import { useEffect } from "react";
import { StyledText } from "../components/styled/StyledText.component";
import { useAppSelector } from "../store";
import { Screen } from "../components/Screen/Screen.component";

export const DashboardScreen = () => {
	const user = useAppSelector((state) => state.user);

	return (
		<Screen style={styles.root}>
			<Text>Dashboard</Text>
		</Screen>
	);
};
