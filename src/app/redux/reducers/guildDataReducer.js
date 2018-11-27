const defaultState = {
    guilds: [],
    selectedGuild: null
};

function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "FILL_GUILDS_DATA":
            return { ...state, guilds: action.payload };
        case "FILL_SELECTED_GUILD_DATA":
            return { ...state, selectedGuild: action.payload };
        default:
            return state;
    }
}

export default mainReducer;
