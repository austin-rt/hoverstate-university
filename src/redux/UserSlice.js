import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
	name: 'UserSlice',
	initialState: {
		user: null
	},
	reducers: {
		setAuthenticatedUser: (state, action) => {
			state.user = action.payload.user;
		},
		clearUserInformation: (state) => {
			state.user = null;
		}
	}
});

export const { setAuthenticatedUser, clearUserInformation } = UserSlice.actions;

export default UserSlice.reducer;
