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
        selectedFilter: "level",
        direction: "desc"
    }
};

function filterGuildMembersReducer(state = defaultState, action) {
    switch (action.type) {
        case "CHANGE_GUILD_MEMBERS_FILTER":
            return { ...state, filters: action.payload };
        default:
            return state;
    }
}

export default filterGuildMembersReducer;
