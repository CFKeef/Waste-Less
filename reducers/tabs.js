const tabs = (state = {
    "tabs": [{id: "tab0", location: "All"}]
}, action) => {
    const {type, payload} = action;

    switch(type) {
        case "TABS_ADD":
            state.tabs = [...state.tabs, payload];
            return {...state};
        case "TABS_EDIT":
            let newTabs = [];

            state.forEach(tab => {
                if(tab.id !== payload.id) newTabs.push(tab);
                else newTabs.push(payload);
            })

            state.tabs = [...newTabs];
            
            return {...state};
        case "TABS_DELETE":
            state = state.filter(tab => tab.id !== payload.id);
            return {...state}
        case "TABS_SET":
            state = [{id: "tab0", location: "All"},...payload]
            return {...state}
        default:
            return state;
    }
};

export default tabs;