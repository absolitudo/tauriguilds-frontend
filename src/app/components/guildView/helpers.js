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
    return require("../../../assets/" + raidInfo[raidName].picture);
}

export { serversToLower, mapInstanceToPicture };
