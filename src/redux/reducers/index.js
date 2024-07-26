import { combineReducers } from "redux";
import articleReducer from "./articles";
import searchReducer from "./search";

const reducer = combineReducers({
    articles: articleReducer,
    search: searchReducer
});

export default reducer;