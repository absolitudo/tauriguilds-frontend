import factions from "../../../constants/factions";
import servers from "../../../constants/servers";

export function applyFilters(guilds, filters) {
    guilds = guilds.filter(guild => {
        // checks if current progression of guild is higher than stated
        if (!(getCurrProgNum(guild.currentProgress) >= filters.hc)) {
            return false;
        }

        // checks faction
        if (
            filters.faction !== "All" &&
            filters.faction !== factions[guild.gFaction + 1]
        ) {
            return false;
        }

        // check server
        if (
            filters.server !== "All" &&
            servers[filters.server] !== guild.realm
        ) {
            return false;
        }

        return true;
    });

    return sort(guilds, filters);
}

function sort(guilds, filters) {
    switch (filters.sort) {
        case "Progression":
            return guilds.sort((guild1, guild2) => {
                return (
                    getCurrProgNum(guild2.currentProgress) -
                    getCurrProgNum(guild1.currentProgress)
                );
            });

        case "Members":
            return guilds.sort((guild1, guild2) => {
                return guild2.guildMembersCount - guild1.guildMembersCount;
            });
        default:
            return guilds;
    }
}

function getCurrProgNum(currentProgress) {
    return Number(/^\d+/.exec(currentProgress));
}

export function convertServerName(serverName) {
    for (let server in servers) {
        if (servers[server] === serverName) {
            return server.toLowerCase();
        }
    }

    return "tauri";
}
