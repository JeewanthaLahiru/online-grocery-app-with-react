export const CHANGE_CATEGORY = "CHANGE_CATEGORY";

export interface ChangeCategory{
    type: typeof CHANGE_CATEGORY,
    payload: string
}

export type categoryActionTypes = ChangeCategory;