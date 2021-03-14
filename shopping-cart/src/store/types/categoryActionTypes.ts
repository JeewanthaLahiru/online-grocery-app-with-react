export const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export interface changeCategory{
    type: typeof CHANGE_CATEGORY,
    payload: string
}

export type categoryTypes = changeCategory;