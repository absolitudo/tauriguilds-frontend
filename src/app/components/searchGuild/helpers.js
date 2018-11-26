export function hcArr() {
    const arr = [];
    for (let i = 0; i < 14; i++) {
        arr.push(i.toString());
    }
    return arr;
}
export function serversToArr(servers, skipIndex = -1) {
    const arr = [];
    let index = -1;
    for (let server in servers) {
        index++;
        if (index === skipIndex) {
            continue;
        }
        arr.push(server);
    }
    return arr;
}
