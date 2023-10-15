import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/user";

const initialState: UserState = {
	id: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		LOGIN: (state, action: PayloadAction<UserState>) => {
			return {
				...state,
				email: action.payload.email,
				id: action.payload.id,
			};
		},
		LOGOUT: (state) => {
			return { ...initialState };
		},
	},
});

export const { LOGIN, LOGOUT } = userSlice.actions;
export default userSlice.reducer;
