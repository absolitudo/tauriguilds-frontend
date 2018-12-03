import factions from "../../../constants/factions";
import servers from "../../../constants/servers";
import { name as currentRaid } from "../../../constants/currentRaid";
export function applyFilters(guilds, filters) {
    guilds = guilds.filter(guild => {
        // checks if current progression of guild is higher than stated
        if (
            !(
                getCurrProgNum(guild.progression[currentRaid].abbreviation) >=
                filters.hc
            )
        ) {
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
                    getCurrProgNum(
                        guild2.progression[currentRaid].abbreviation
                    ) -
                    getCurrProgNum(guild1.progression[currentRaid].abbreviation)
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

function getCurrProgNum(abbreviation) {
    return Number(/\d+/g.exec(abbreviation));
}

export function convertServerName(serverName) {
    for (let server in servers) {
        if (servers[server] === serverName) {
            return server.toLowerCase();
        }
    }

    return "tauri";
}
