import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Route, Routes } from "react-router-native";
import { DashboardScreen } from "./src/screens/Dashboard.screen";
import { LoginScreen } from "./src/screens/Login.screen";
import { store } from "./src/store";
import styles, { fontFamily } from "./src/theme";

//probando git

export default function App() {
	const [fontsLoaded] = Font.useFonts(fontFamily);

	return (
		<Provider store={store}>
			<NativeRouter>
				<View style={styles.root}>
					<Routes>
						<Route path="/" Component={LoginScreen} />
						<Route path="/dashboard" Component={DashboardScreen} />
					</Routes>
					<StatusBar style="auto" />
				</View>
			</NativeRouter>
		</Provider>
	);
}
