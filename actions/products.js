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

export const setProducts = payload => {
    return {
        type: 'PRODUCTS_SET',
        payload: payload
    };
};


export const filterProducts = payload => {
    return {
        type: 'PRODUCTS_FILTERED',
        payload: payload
    };
};