import { combineReducers } from "redux";
import navbarTitleReducer from "./navbarTitle/reducer";
import suppliersReducer from "./suppliers/reducer";
import customersReducer from "./customers/reducer";
import productsReducer from "./products/reducer";
import localizationReducer from "./localization/reducer";

const reducers = combineReducers({
    navbarTitleReducer: navbarTitleReducer,
    localizationReducer: localizationReducer,
    suppliersReducer: suppliersReducer,
    customersReducer: customersReducer,
    productsReducer: productsReducer
})

export default reducers;