import {authenticationActionTypes, SIGN_IN, SIGN_OUT} from "../types/authActionTypes";
import {authUserState} from "../types/authenticationTypes";

const initialState: authUserState = {
    logged : false
}

export const authReducer = ( state: authUserState = initialState, action:authenticationActionTypes): authUserState => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                logged: action.payload
            }
        case SIGN_OUT:
            return {
                ...state,
                logged: action.payload
            }
        default:
            return state;
    }
}