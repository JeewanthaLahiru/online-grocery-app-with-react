import {CHANGE_CATEGORY, changeCategory} from "../types/categoryActionTypes";

export const changeCategoryItem = (category: string):changeCategory => {
    return {
        type: CHANGE_CATEGORY,
        payload: category
    }
}