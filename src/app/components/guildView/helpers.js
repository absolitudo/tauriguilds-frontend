import tmpServers from "../../../constants/servers.json";

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

function filterGuildMembers(guildMembers, filters) {
    if (filters.direction === "asc") {
        return guildMembers.sort(
            (a, b) => a[filters.selectedFilter] - b[filters.selectedFilter]
        );
    }
    return guildMembers.sort(
        (a, b) => b[filters.selectedFilter] - a[filters.selectedFilter]
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
    capitalizeString
};
