export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";

export interface loadingStart{
    type: typeof LOADING_START,
    payload: boolean
}

export interface loadingEnd{
    type: typeof LOADING_END,
    payload: boolean
}