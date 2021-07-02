import {loadingScreenState} from "../types/loadingTypes";
import {loadingScreenAcationTypes} from "../types/loadingActionTypes";

const initialState: loadingScreenState = {
    loading: false
}

export const LoadingScreenReducers = (state:loadingScreenState = initialState, action: loadingScreenAcationTypes) : loadingScreenState => {
    switch (action.type) {
        case "LOADING_START":
            return {
                ...state,
                loading: action.payload
            }
        case "LOADING_END":
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}