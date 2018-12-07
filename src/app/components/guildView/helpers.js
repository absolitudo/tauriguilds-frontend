import tmpServers from "../../../constants/servers.json";
import { name as currentRaid } from "../../../constants/currentRaid";
import { getCurrProgNum } from "../showGuilds/helpers";

function serversToLower() {
    let servers = {};
    for (let server in tmpServers) {
        servers[server.toLocaleLowerCase()] = tmpServers[server];
    }
    return servers;
}

function mapInstanceToPicture(raidName) {
    const raidInfo = require("../../../constants/raidInfo.json");
    return require(`../../../assets/${raidInfo[raidName].picture}`);
}

function getClassPictures() {
    let pictures = {};
    for (let i = 1; i < 12; i++) {
        pictures[i] = require(`../../../assets/${i}.png`);
    }
    return pictures;
}

function filterGuildMembers(guildMembers, filter) {
    const nameRegex = new RegExp(filter[filter.by], "gi");
    return guildMembers.filter(member => {
        if (nameRegex.exec(member[filter.by])) {
            return true;
        }

        return false;
    });
}

function sortGuildMembers(guildMembers, sort) {
    let first = 1;
    let second = -1;
    if (sort.direction === "asc") {
        first = -1;
        second = 1;
    }

    if (sort.by === "progression") {
        return guildMembers.sort((a, b) =>
            getCurrProgNum(a[sort.by][currentRaid].abbreviation) <
            getCurrProgNum(b[sort.by][currentRaid].abbreviation)
                ? first
                : second
        );
    }

    return guildMembers.sort((a, b) =>
        a[sort.by] < b[sort.by] ? first : second
    );
}

function capitalizeString(string) {
    let newString = string[0].toUpperCase() + string.slice(1, string.length);
    return newString;
}

export {
    serversToLower,
    mapInstanceToPicture,
    getClassPictures,
    filterGuildMembers,
    sortGuildMembers,
    capitalizeString
};
