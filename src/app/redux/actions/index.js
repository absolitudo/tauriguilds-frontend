export function fillGuildsData(payload) {
    return {
        type: "FILL_GUILDS_DATA",
        payload
    };
}

export function changeGuildFilter(payload) {
    return {
        type: "CHANGE_GUILD_FILTER",
        payload
    };
}

export function changeGuildMembersFilter(payload) {
    return {
        type: "CHANGE_GUILD_MEMBERS_FILTER",
        payload
    };
}

export function changeGuildMembersPagination(payload) {
    return {
        type: "CHANGE_GUILD_MEMBERS_PAGINATION",
        payload
    };
}

export function fillSelectedGuildData(payload) {
    return {
        type: "FILL_SELECTED_GUILD_DATA",
        payload
    };
}

export function guildViewLoading(payload) {
    return {
        type: "SET_GUILD_VIEW_LOAD",
        payload
    };
}
