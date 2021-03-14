import {CHANGE_CATEGORY, ChangeCategory} from "../types/categoryActionTypes";

export const changeCategory = (category: string):ChangeCategory => {
    return {
        type: CHANGE_CATEGORY,
        payload: category
    }
}