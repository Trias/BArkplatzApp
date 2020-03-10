const ACCESS_TOKEN = '';
const URL = ``;

import dummyData from '../data/UpdatedDummy.json';

let cache = null;

let interval = null;

async function rpcCall(method, params = {}) {
    let response;
    try {
        console.log('start API call: '+ method + ' with params: ' + JSON.stringify(params));
        response = await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                method, params
            })
        });
        let json = await response.json()

        console.log('api call successful');
        console.log('method: ' + method);
        console.log('params: ' + JSON.stringify(params));
        console.log(json);

        return json;
    } catch (e) {
        console.warn('error while getting API data')
        console.log(response);
        console.log(e);
    }
}

export async function initApi() {
    await fetchAllAsync();
    interval = setInterval(fetchAllAsync, 60 * 1000);
}
export function stopApi() {
    clearInterval(interval);
    interval = null;
}
export async function fetchAllAsync() {
    let response = await rpcCall('fetchAll');
    if (response && !response.error) {
        cache = addCoordinates(response)
    } else {
        console.warn('empty data from api, using old data');
    }
    return cache;
}
export async function getReservationsOfThisUserAsync() {
    return await rpcCall('getReservationsOfThisUser')
}
export async function reserveAsync(reservation) {
    return await rpcCall('reserve', reservation)
}
export async function deleteReservationAsync(reservation) {
    return await rpcCall('deleteReservation', reservation);
}
export async function getReservationOfOneParkingSpaceAsync(parkingSpaceId) {
    return await rpcCall('getReservationOfOneParkingSpace', { parkingSpaceId });
}
export function getData() {
    if (!cache) {
        console.warn('error fetching data from api, using dummy data');
        cache = addCoordinates(dummyData);
    }

    return cache;
}

function addCoordinates(cache){
    for (let parkingLot of Object.values(cache)) {
        let firstParkingSpace = Object.values(parkingLot.spaces)[0];
        parkingLot.latitude = firstParkingSpace.latitude;
        parkingLot.longitude = firstParkingSpace.longitude;
    }

    return cache
}
