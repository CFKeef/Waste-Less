const accounts = (state = {
    email: "PatryckG@outlook.com",
    accountID: 65,
    pantryID: 18
}, action) => {
    const {type, payload} = action;

    switch(type) {
        case "ACCOUNT_SET":
            state = payload
            return {...state}
        default:
            return state;
    }
};

export default accounts;