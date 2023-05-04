import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { homeReducer } from "./homeReducer";

const reducers = combineReducers({
    account: accountReducer,
    home: homeReducer
})

export default reducers;