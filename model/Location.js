import {getData} from '../services/ApiService.js'
import {getLocation} from '../services/LocationTrackingService.js'
import LatLon from 'geodesy/latlon-nvector-spherical.js'

export function isOnParkingLot(parkingLotId) {
    let coords = getLocation().coords;
    let pointLocation = new LatLon(coords.latitude, coords.longitude);
    let parkingLot = getData()[parkingLotId];
    let pointParkingLot = new LatLon(parkingLot.latitude, parkingLot.longitude);
    return pointLocation.distanceTo(pointParkingLot) < 150;
}