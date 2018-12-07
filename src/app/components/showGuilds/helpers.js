import factions from "../../../constants/factions";
import servers from "../../../constants/servers";
import { lastBoss } from "../../../constants/raidInfo";
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
            return guilds.sort((a, b) => {
                let bBossDefeated = getCurrProgNum(
                    b.progression[currentRaid].abbreviation
                );
                let aBossDefeated = getCurrProgNum(
                    a.progression[currentRaid].abbreviation
                );
                if (bBossDefeated === 13 && aBossDefeated === 13) {
                    return b.progression[currentRaid][lastBoss] <
                        a.progression[currentRaid][lastBoss]
                        ? 1
                        : -1;
                }

                return bBossDefeated - aBossDefeated;
            });

        case "Members":
            return guilds.sort((a, b) => {
                return b.guildMembersCount - a.guildMembersCount;
            });
        default:
            return guilds;
    }
}

export function getCurrProgNum(abbreviation) {
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
