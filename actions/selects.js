export const selectProduct = payload => {
    return {
        type: 'SELECT_PRODUCT',
        payload: payload
    };
};

export const selectProductList = payload => {
    return {
        type: 'SELECT_PRODUCTLIST',
        payload: payload
    };
};

export const selectTab = payload => {
    return {
        type: "SELECT_TAB",
        payload: payload
    }
}
