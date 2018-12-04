const defaultState = {
    tableColumns: [
        {
            id: "name",
            label: "Name"
        },
        {
            id: "class",
            label: "Class"
        },
        {
            id: "race",
            label: "Race"
        },
        {
            id: "level",
            label: "Level"
        },
        {
            id: "rank",
            label: "Rank"
        }
    ],
    filters: {
        selectedFilter: "rank",
        direction: "asc"
    },
    pagination: {
        rowsPerPageOptions: [5, 10, 30],
        rowsPerPage: 10,
        currentPage: 0
    }
};

function filterGuildMembersReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_GUILD_MEMBERS_FILTER":
            return {
                ...state,
                filters: action.payload,
                pagination: { ...state.pagination, currentPage: 0 }
            };
        case "CHANGE_GUILD_MEMBERS_PAGINATION":
            return {
                ...state,
                pagination: { ...state.pagination, ...action.payload }
            };
        default:
            return state;
    }
}

export default filterGuildMembersReducer;
