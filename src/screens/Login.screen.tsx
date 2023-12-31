import { View } from "react-native";
import { LoginForm } from "../components/LoginForm/LoginForm.component";
import theme from "../theme";
import { Screen } from "../components/Screen/Screen.component";

export const LoginScreen = () => {
	const style = [theme.screen, theme.loginScreen];
	return (
		<View style={style}>
			<LoginForm />
		</View>
	);
};
