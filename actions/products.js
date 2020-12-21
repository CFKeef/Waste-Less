export const selectProduct = payload => {
    return {
        type: 'PRODUCTS_SELECTED',
        payload: payload
    };
};

export const addProduct = payload => {
    return {
        type: 'PRODUCTS_ADD',
        payload: payload
    };
};

export const editProduct = payload => {
    return {
        type: 'PRODUCTS_EDIT',
        payload: payload
    };
};