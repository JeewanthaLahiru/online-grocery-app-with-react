import {SIGN_IN, SIGN_OUT} from "../types/authActionTypes";

export const login = (loginState: boolean) => {
    return {
        type : SIGN_IN,
        payload : loginState
    }
}

export const logout = (loginState: boolean) => {
    return {
        type : SIGN_OUT,
        payload : loginState
    }
}