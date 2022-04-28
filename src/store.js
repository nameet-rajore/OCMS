import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialAuthState = {
    isLoggedIn: false,
    userId:null,
    userName:null,
    cart:[]
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setLogin(state, action) {
            state.isLoggedIn = action.payload;
        },
        setUserId(state, action) {
            state.userId = action.payload;
        },
        setUserName(state, action){
            state.userName = action.payload;
        },
        setCart(state, action){
            state.cart = action.payload;
        }

    }
}
);

const store = configureStore({ reducer: authSlice.reducer });
export const authActions = authSlice.actions;


export default store;
