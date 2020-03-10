import { getOccupiedParkingSpaceIds, getFilteredParkingSpaces, getReservedParkingSpaceIds } from '../model/ParkingLot'
import { getData } from '../services/ApiService';

const greyedColorMap = {
    'orange': '#CC8400',
    'red': '#bf9494',
    'lightgreen': '#7F9984',
    '#ADD8E6': '#67818a'
};

export function getColorOfParkingSpace(parkingLotId, rememberedParkingLotId, parkingSpaceNumber, activeFilter, rememberedParkingSpaceId) {
    if (occupiedSpaces === null) {
        return 'grey';
    }

    let data = getData();

    let occupiedSpaces;
    if (!data[parkingLotId]) {
        occupiedSpaces = null;
    } else {
        occupiedSpaces = getOccupiedParkingSpaceIds(data[parkingLotId]);
    }

    const filteredParkingSpaces = getFilteredParkingSpaces(data[parkingLotId], activeFilter);


    // TODO brrr..
    let reservedParkingSpaceIds = parkingLotId == rememberedParkingLotId?getReservedParkingSpaceIds(data[parkingLotId]):[];
    rememberedParkingSpaceId = parkingLotId == rememberedParkingLotId?rememberedParkingSpaceId:null;

    let color = getColorWithoutFilter(data[parkingLotId].spaces[parkingSpaceNumber], occupiedSpaces, rememberedParkingSpaceId, reservedParkingSpaceIds);
    let dataId = "" + parkingSpaceNumber;
    if (!filteredParkingSpaces.includes(dataId)) {
        return greyedColorMap[color];
    } else {
        return color;
    }
}

function getColorWithoutFilter(parkingSpace, occupiedSpaces, rememberedParkingSpaceId, reservedParkingSpaceIds) {
    // TODO much simpler....
    let dataId = "" + parkingSpace.xml_id;

    if (parkingSpace.xml_id == rememberedParkingSpaceId) {
        return '#ADD8E6';
    } else if (reservedParkingSpaceIds.includes(parkingSpace.id)
        || parkingSpace && parkingSpace.reserved) {
        return 'orange';
    } else if (occupiedSpaces.includes(dataId)) {
        return 'red';
    } else {
        return 'lightgreen';
    }
}