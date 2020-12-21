const initialState = {
    "tabs": [{id: "tab0", title: "All"}]
};

const tabs = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case "TABS_ADD":
            console.log("Test")
            state = [...state, payload];
            return [...state];
        case "TABS_EDIT":
            let newTabs = [];

            state.forEach(tab => {
                if(tab.id !== payload.id) newTabs.push(tab);
                else newTabs.push(payload);
            })

            state = [...newTabs];
            
            return [...state];
        case "TABS_DELETE":
            state = state.filter(tab => tab.id !== payload.id);
            return [...state]
        default:
            return state;
    }
};

export default tabs;