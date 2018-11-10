const defaultState = {
    compactGuilds: []
};

function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "FILL_COMPACT_GUILDS_DATA":
            return { ...state, compactGuilds: action.payload };
        default:
            return state;
    }
}

export default mainReducer;
