import { combineReducers } from "redux";
import navbarTitleReducer from "./navbarTitle/reducer";

const reducers = combineReducers({
    navbarTitleReducer: navbarTitleReducer
})

export default reducers;