import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialAuthState = {
    isLoggedIn: false,
    firstName: '',
    lastName:''
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setLogin(state, action) {
            state.isLoggedIn = action.payload;
        },

    }
}
);

const store = configureStore({ reducer: authSlice.reducer });
export const authActions = authSlice.actions;


export default store;
