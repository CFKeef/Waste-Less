// import dependencies
import { combineReducers } from "redux";

// import reducers
import products from "./products";
import tabs from "./tabs";

// export the reducer
const rootReducer = combineReducers({
    "products": products,
    "tabs": tabs
});

export default rootReducer;