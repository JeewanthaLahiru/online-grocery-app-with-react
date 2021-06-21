import {combineReducers} from "redux";
import {cartProductReducer} from "./CartProductReducers";
import {categoryReducer} from "./CategoryReducers";
import {authReducer} from "./AuthReducers";

export const rootReducer = combineReducers({
    cartProduct: cartProductReducer,
    category: categoryReducer,
    auth: authReducer
})

export type AppState = ReturnType<typeof rootReducer>