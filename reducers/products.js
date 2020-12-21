const products = (state = {
    "products": []
}, action) => {
    const {type, payload} = action;

    switch(type) {
        case "PRODUCTS_ADD":
            state.products = [...state.products, payload]
            return {...state}
        case "PRODUCTS_EDIT":
            let newProducts = [];

            state.forEach(product => {
                if(product.id !== payload.id) newProducts.push(product);
                else newProducts.push(payload);
            });
            state = [...newProducts];

            return {...state}
        case "PRODUCTS_DELETE":
            state.products = state.filter(product => product.id !== payload.id);
            return {...state}
        default:
            return state;
    }
};

export default products;