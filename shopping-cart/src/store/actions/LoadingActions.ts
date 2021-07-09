import {LOADING_END, LOADING_START} from "../types/loadingActionTypes";

export const loading_start = (loading: boolean) => {
    return{
        type: LOADING_START,
        payload: loading
    }
}

export const loading_end = (loading: boolean) => {
    return{
        type: LOADING_END,
        payload: loading
    }
}