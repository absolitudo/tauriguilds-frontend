const defaultState = {
    errorString: null
};

function errorReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_ERROR":
            return { ...state, errorString: action.payload };
        default:
            return state;
    }
}

export default errorReducer;
