export function getFilteredParkingSpaces(parkingLot, activeFilter) {
    if (activeFilter === 'Alle') {
        return Object.keys(parkingLot.spaces);
    }
    let ids = [];
    for (let id of Object.keys(parkingLot.spaces)) {
        let parkingSpace = parkingLot.spaces[id];
        if (parkingSpace.category === activeFilter) {
            ids.push(id);
        }
    }
    return ids;
}

export function getOccupiedParkingSpaceIds(parkingLotData) {
    let allIds = Object.keys(parkingLotData.spaces);
    let occupiedIds = [];
    for (let id of allIds) {
        if (parkingLotData.spaces[id].occupied) {
            occupiedIds.push(id);
        }
    }

    return occupiedIds;
}

export function getReservedParkingSpaceIds(parkingLotData){
    let allIds = Object.keys(parkingLotData.spaces);
    let reservedIds = [];
    for (let id of allIds) {
        if (parkingLotData.spaces[id].reserved) {
            reservedIds.push(id);
        }
    }

    return reservedIds;
}