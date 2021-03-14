import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

export const configureStore = () => {
    let persistedState = {}
    const store = createStore(rootReducer,
        persistedState,
        composeWithDevTools(applyMiddleware(thunkMiddleware)));
    return store;
}