import { Screen } from "./components/Screen/Screen.component";
import { ViewStyle } from "react-native";
import { ReactNode } from "react";
export interface StyledTextProps {
	children: ReactNode;
	centered?: boolean;
	heading?: boolean;
	title?: boolean;
	subtitle?: boolean;
	big?: boolean;
	small?: boolean;
	bold?: boolean;
	white?: boolean;
	style?: ViewStyle;
}

export interface StyledButtonProps {
	children: ReactNode;
	secondary?: boolean;
	onPress?: () => void;
	style?: ViewStyle;
}

export interface ScreenProps {
	style: ViewStyle;
	children: ReactNode;
}

export interface UserState {
	id: number | null;
	email?: string;
	name?: string;
	photo?: string;
}

export interface LoginData {
	email: string;
	password: string;
}

export interface ApiResponse {
	status: string;
	data: any;
}

export interface StyledTextStyle {
	[key: string]: ViewStyle;
}
