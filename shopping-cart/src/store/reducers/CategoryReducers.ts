import {categoryState} from "../types/categoryTypes";
import {categoryActionTypes, CHANGE_CATEGORY, ChangeCategory} from "../types/categoryActionTypes";

const initialState:categoryState={
    category: "All"
}

export const categoryReducer = (
    state:categoryState=initialState,
    action:categoryActionTypes):categoryState => {
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