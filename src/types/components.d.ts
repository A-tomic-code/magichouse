export interface ScreenProps {
	style: ViewStyle;
	children: ReactNode;
}

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
