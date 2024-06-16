import { combineReducers } from "redux";
import navbarTitleReducer from "./navbarTitle/reducer";
import suppliersReducer from "./suppliers/reducer";
import customersReducer from "./customers/reducer";
import productsReducer from "./products/reducer";
import localizationReducer from "./localization/reducer";
import authReducer from "./auth/reducer";
import subAdminsReducer from "./subadmin/reducer";
import userReducer from "./user/reducer";
import dashboardDataReducer from "./dashboard/reducer";

const reducers = combineReducers({
    navbarTitleReducer: navbarTitleReducer,
    authReducer: authReducer,
    dashboardDataReducer: dashboardDataReducer,
    localizationReducer: localizationReducer,
    suppliersReducer: suppliersReducer,
    customersReducer: customersReducer,
    productsReducer: productsReducer,
    subAdminsReducer: subAdminsReducer,
    userReducer: userReducer,
})

export default reducers;