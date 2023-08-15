import { useState } from "react";
import { TextInput, View, Image } from "react-native";
import { useUser } from "../../hooks/useUser.hook";
import theme from "../../theme";
import { StyledButton } from "../styled/StyledButton.component";
import { useNavigate } from "react-router-native";
import { StyledText } from "../styled/StyledText.component";

export const LoginForm = () => {
	const { login } = useUser();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const onPressLogin = () => {
		login({ email, password }).then((response) => {
			navigate("/dashboard");
		});
	};

	return (
		<View style={theme.loginForm}>
			<Image
				source={require("../../assets/logo-big.png")}
				style={theme.loginScreenImage}
			/>
			<StyledText big centered>
				Inicia sesión con tu cuenta
			</StyledText>
			<TextInput
				style={theme.textInput}
				placeholder="Email"
				onChange={(event) => setEmail(event.nativeEvent.text)}
			/>
			<TextInput
				style={theme.textInput}
				placeholder="Password"
				onChange={(event) => setPassword(event.nativeEvent.text)}
			/>
			<StyledButton onPress={onPressLogin}>Iniciar sesión</StyledButton>
			<StyledText big centered>
				o crea una nueva
			</StyledText>
			<StyledButton onPress={onPressLogin}>Crear cuenta nueva</StyledButton>
		</View>
	);
};
