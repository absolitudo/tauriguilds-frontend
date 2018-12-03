const defaultState = {
    server: "All",
    faction: "All",
    hc: "0",
    sort: "Progression"
};

function filterGruildsReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_GUILD_FILTER":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        default:
            return state;
    }
}

export default filterGruildsReducer;
