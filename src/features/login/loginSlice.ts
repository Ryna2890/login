import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface LoginState {
    errorMsg: string;
    auth: boolean;
}

const initialState: LoginState = {
    errorMsg: '',
    auth: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<boolean>) => {
            state.auth = action.payload;
            state.errorMsg=''
        },
        logInFailure: (state, action: PayloadAction<string>) => {
            state.errorMsg = action.payload
        },
        logOut: (state) => {
            state.auth=initialState.auth
            state.errorMsg=initialState.errorMsg
        }
    },
})

export const {logIn, logInFailure, logOut} = loginSlice.actions

export default loginSlice.reducer