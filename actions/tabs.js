export const addTab = payload => {
    return {
        type: "TABS_ADD",
        payload: payload
    }
}

export const editTab = payload => {
    return {
        type: "TABS_EDIT",
        payload: payload
    }
}

export const setTabs = payload => {
    return {
        type: "TABS_SET",
        payload: payload
    }
}

export const deleteTab = payload => {
    return {
        type: "TABS_DELETE",
        payload: payload
    }
}