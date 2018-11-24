export function fillGuildsData(payload) {
    return {
        type: "FILL_GUILDS_DATA",
        payload
    };
}

export function changeFilter(payload) {
    return {
        type: "CHANGE_FILTER",
        payload
    };
}
