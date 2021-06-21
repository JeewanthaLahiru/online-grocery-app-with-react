export const SIGN_IN = "LOGIN";
export const SIGN_OUT = "LOGOUT";

export interface SignIn{
    type: typeof SIGN_IN,
    payload: boolean
}

export interface SignOut{
    type: typeof SIGN_OUT,
    payload: boolean
}

export type authenticationActionTypes = SignIn | SignOut;