import tmpServers from "../../../constants/servers.json";
let servers = {};
for (let server in tmpServers) {
    servers[server.toLocaleLowerCase()] = tmpServers[server];
}

export { servers };
