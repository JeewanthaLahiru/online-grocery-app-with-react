import {combineReducers} from "redux";
import {cartProductReducer} from "./CartProductReducers";
import {categoryReducer} from "./CategoryReducers";

export const rootReducer = combineReducers({
    cartProduct: cartProductReducer,
    category: categoryReducer
})

export type AppState = ReturnType<typeof rootReducer>