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

export { serversToLower, mapInstanceToPicture, getClassPictures };
