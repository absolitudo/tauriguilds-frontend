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
        },
        {
            id: "progression",
            label: "Progression"
        }
    ],
    sort: {
        by: "rank",
        direction: "asc"
    },
    filter: {
        by: "name",
        name: ""
    },
    pagination: {
        rowsPerPageOptions: [5, 10, 30],
        rowsPerPage: 10,
        currentPage: 0
    }
};

function filterGuildMembersReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_GUILD_MEMBERS_SORT":
            return {
                ...state,
                sort: action.payload,
                pagination: { ...state.pagination, currentPage: 0 }
            };
        case "CHANGE_GUILD_MEMBERS_FILTER":
            return {
                ...state,
                filter: { ...action.payload },
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
