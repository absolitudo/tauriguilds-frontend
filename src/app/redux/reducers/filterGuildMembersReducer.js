const defaultState = {
    tableColumns: [
        {
            id: "name",
            label: "Name",
            selectable: false
        },
        {
            id: "class",
            label: "Class",
            selectable: true
        },
        {
            id: "race",
            label: "Race",
            selectable: true
        },
        {
            id: "level",
            label: "Level",
            selectable: true
        },
        {
            id: "rank",
            label: "Rank",
            selectable: true
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
            return { ...state, filters: action.payload };
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
