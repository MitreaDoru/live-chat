import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    token: '',
    userId: '',
    image: ''
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.image = action.payload.image;

        },
        logout(state) {

            state.isAuthenticated = false;
            state.token = '';
            state.userId = '';
            state.image = '';
        },
    },
});
export const authAction = authSlice.actions;
export default authSlice.reducer;