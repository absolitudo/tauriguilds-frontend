export function hcArr() {
    const arr = [];
    for (let i = 0; i < 14; i++) {
        arr.push(i.toString());
    }
    return arr;
}
export function serversToArr(servers) {
    const arr = [];
    for (let server in servers) {
        arr.push(server);
    }
    return arr;
}
