import { determinePreselectedParkingLotId } from '../ArtificialIntelligence.js';
import * as ApiService from '../../services/ApiService';
import * as LocationTrackingService from '../../services/LocationTrackingService';

jest.mock('../../services/ApiService');
jest.mock('../../services/LocationTrackingService');

function addCoordinates(cache){
    for (let parkingLot of Object.values(cache)) {
        let firstParkingSpace = Object.values(parkingLot.spaces)[0];
        parkingLot.latitude = firstParkingSpace.latitude;
        parkingLot.longitude = firstParkingSpace.longitude;
    }

    return cache
}
ApiService.getData = jest.fn(() => {return addCoordinates(require('../../data/UpdatedDummy'))});


function occupyAll(data){
    Object.values(data).forEach((lot) => {
        Object.values(lot.spaces).forEach((space) => {
            space.occupied = true;
        })
        lot.occupied = lot.occupied + lot.unoccupied;
        lot.unoccupied = 0;
    })

    return data;
}

describe('ArtificialIntelligence', () => {
    beforeAll(() => {
        ApiService.getData = jest.fn(() => {return addCoordinates(require('../../data/UpdatedDummy'))});
    });

    it('should find the nearest parking lot from erba', () => {
        LocationTrackingService.getLocation = jest.fn(() => {return { coords: {      
            latitude: 49.903, 
            longitude: 10.87
        } }})
        let parkingLotId = determinePreselectedParkingLotId();

        expect(parkingLotId).toBe(38);
    });

    it('should find the nearest parking lot from mahrs bräu', () => {
        LocationTrackingService.getLocation = jest.fn(() => {return { coords: {      
            latitude: 49.89, 
            longitude: 10.904
        } }})
        let parkingLotId = determinePreselectedParkingLotId();

        expect(parkingLotId).toBe(634);
    });

    it('should find no nearest parking lot if they are to far away', () => {
        LocationTrackingService.getLocation = jest.fn(() => {return { coords: {      
            latitude: 49.4362318, 
            longitude: 10.9926116
        } }})
        let parkingLotId = determinePreselectedParkingLotId();

        expect(parkingLotId).toBe(null);
    })


    it('should find no nearest parking lot if they are full', () => {
        ApiService.getData = jest.fn(() => {return occupyAll(addCoordinates(require('../../data/UpdatedDummy')))});
        LocationTrackingService.getLocation = jest.fn(() => {return { coords: {      
            latitude: 49.89, 
            longitude: 10.904
        } }})
        let parkingLotId = determinePreselectedParkingLotId();

        expect(parkingLotId).toBe(null);
    })
})