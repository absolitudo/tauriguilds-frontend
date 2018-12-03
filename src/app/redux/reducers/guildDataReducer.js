const defaultState = {
    guilds: [],
    selectedGuild: {
        loading: true
    }
};

function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case "FILL_GUILDS_DATA":
            return { ...state, guilds: action.payload };
        case "FILL_SELECTED_GUILD_DATA":
            return {
                ...state,
                selectedGuild: { ...action.payload, loading: false }
            };
        case "SET_GUILD_VIEW_LOAD":
            return {
                ...state,
                selectedGuild: {
                    ...state.selectedGuild,
                    loading: action.payload
                }
            };
        default:
            return state;
    }
}

export default mainReducer;
