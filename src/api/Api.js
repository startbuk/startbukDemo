
const getServer = {
    server: 'http://192.168.43.89:8080/api/v1'
}
export default class {
    static doPost(service, param, result) {
        return fetch(getServer.server + service, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
                'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
            },
            body: JSON.stringify(param),
        })
            .then((response) => { return response.json() })
            .catch((error) => console.warn("fetch error:", error))
            .then((response) => {
                result(response);
            });
    }
    static doGet(service, param, result) {
        return fetch(getServer.server + service, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
                'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
            }
        })
            .then((response) => { return response.json() })
            .catch((error) => console.warn("fetch error:", error))
            .then((response) => {
                result(response);
            });
    }
    static doPut(service, param, result) {
        return fetch(getServer.server + service, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
                'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
            },
            body: JSON.stringify(param),
        })
            .then((response) => { return response.json() })
            .catch((error) => console.warn("fetch error:", error))
            .then((response) => {
                result(response);
            });
    }
    static doDelete(service, param, result) {
        return fetch(getServer.server + service, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'X-API-Key': 'AAk3i9ThQ4QhEZcqfPvN/MXmeuiSr3BJfSniwmtja2yIuFN2cctjJnTgNeU5nLYg',
                'token': '0329cb5f-c79b-4948-a2c9-fc659914b853'
            },
            body: JSON.stringify(param),
        })
            .then((response) => { return response.json() })
            .catch((error) => console.warn("fetch error:", error))
            .then((response) => {
                result(response);
            });
    }
}