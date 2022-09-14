import {productsReducer} from "./productsReducer";
import {combineReducers} from "redux";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    products: productsReducer,

});
