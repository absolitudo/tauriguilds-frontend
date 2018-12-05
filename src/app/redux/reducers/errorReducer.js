const defaultState = {
    errorString: null
};

function errorReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_ERROR":
            return { ...state, errorString: action.payload };
        case "REMOVE_ERROR":
            return { ...state, errorString: null };
        default:
            return state;
    }
}

export default errorReducer;
