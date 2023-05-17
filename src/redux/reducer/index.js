import { combineReducers } from "redux";
import { accountReducer } from "./accountReducer";
import { homeReducer } from "./homeReducer";
import { postReducer } from "./postReducer";

const reducers = combineReducers({
    account: accountReducer,
    home: homeReducer,
    post: postReducer,
})

export default reducers;