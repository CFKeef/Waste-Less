// import dependencies
import { combineReducers } from "redux";

// import reducers
import products from "./products";
import tabs from "./tabs";
import flags from './flags';
import selects from './selects';
import accounts from './accounts';

// export the reducer
const rootReducer = combineReducers({
    "products": products,
    "tabs": tabs,
    "selects": selects,
    "flags": flags,
    "accounts": accounts
});

export default rootReducer;