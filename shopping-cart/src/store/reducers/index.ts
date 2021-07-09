import {combineReducers} from "redux";
import {cartProductReducer} from "./CartProductReducers";
import {categoryReducer} from "./CategoryReducers";
import {authReducer} from "./AuthReducers";
import {loadingScreenReducers} from "./LoadingScreenReducers";

export const rootReducer = combineReducers({
    cartProduct: cartProductReducer,
    category: categoryReducer,
    auth: authReducer,
    loading: loadingScreenReducers
})

export type AppState = ReturnType<typeof rootReducer>