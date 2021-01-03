const selects = (state = {
    "tab": {id: "tab0", location: "All"},
    "product": {},
    "productList": []
}, action) => {
    const {type, payload} = action;

    switch(type) {
        case "SELECT_PRODUCT":
            state.product = payload
            return {...state}
        case "SELECT_TAB":
            state.tab = payload
            return {...state}
        case "SELECT_PRODUCTLIST":
            state.productList = payload
            return {...state}
        default:
            return state;
    }
};

export default selects;