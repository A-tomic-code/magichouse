import { Image, Text, View } from "react-native";
import { LoginForm } from "../components/LoginForm/LoginForm.component";
import theme from "../theme";
import { isWeb } from "../constants";

export const LoginScreen = () => {
	const style = [theme.screen, theme.loginScreen];
	return (
		<View style={style}>
			<View style={theme.loginScreenFormWrapper}>
				<LoginForm />
			</View>
		</View>
	);
};
