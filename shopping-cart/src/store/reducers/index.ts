import {combineReducers} from "redux";
import {cartProductReducer} from "./CartProductReducers";

export const rootReducer = combineReducers({
    cartProduct: cartProductReducer,
})

export type AppState = ReturnType<typeof rootReducer>