const defaultState = {
    server: "All",
    faction: "All",
    hc: "0",
    sort: "Date added"
};

function filterGruildsReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_FILTER":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state;
    }
}

export default filterGruildsReducer;
