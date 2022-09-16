import {productsReducer} from "./productsReducer";
import {combineReducers} from "redux";
import {appReducer} from "./appReducer";
import {usersReducer} from "./usersReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    products: productsReducer,
    users : usersReducer,

});
