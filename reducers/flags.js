const flags = (state = {
    "isStoreListDisplayed": true
}, action) => {
    const {type, payload} = action;

    switch(type) {
        case "FLAG_SET_STORELISTDISPLAYED":
            state.isStoreListDisplayed = payload
            return {...state}
        default:
            return state;
    }
};

export default flags;