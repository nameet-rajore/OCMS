import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialAuthState = {
    token: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },

    }
}
);

const store = configureStore({ reducer: authSlice.reducer });
export const authActions = authSlice.actions;


export default store;
