import {categoryState} from "../types/categoryTypes";
import {categoryActionTypes, CHANGE_CATEGORY} from "../types/categoryActionTypes";

const initialState:categoryState={
    category: ""
}

export const categoryReducer = (state=initialState,action:categoryActionTypes) => {
    switch (action.type){
        case CHANGE_CATEGORY:{
            return {
                ...state,
                category:action.payload
            }
        }
        default:
            return state;
    }
}