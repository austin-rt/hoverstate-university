import { createSlice } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
	name: 'UserSlice',
	initialState: {
		user: {
			username: null
		}
	},
	reducers: {
		setAuthenticatedUser: (state, action) => {
			state.user = action.payload.user;
		},
		clearUserInformation: (state) => {
			state.user = {
				user: {
					username: null
				}
			};
		}
	}
});

export const { setAuthenticatedUser, clearUserInformation } = UserSlice.actions;

export default UserSlice.reducer;
