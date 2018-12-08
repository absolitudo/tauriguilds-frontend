const defaultState = {
    isUpdating: false,
    err: null
};

function guildUpdateReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_GUILD_UPDATING":
            return { ...state, isUpdating: action.payload };
        case "FILL_SELECTED_GUILD_DATA":
            return { ...state, err: null, isUpdating: false };
        case "SET_GUILD_UPDATING_ERROR":
            if (typeof action.payload !== "string") {
                action.payload = "Unexpected error";
            }
            return { ...state, err: action.payload, isUpdating: false };
        default:
            return state;
    }
}

export default guildUpdateReducer;
