
import { getData } from '../services/ApiService';
import { getLocation } from '../services/LocationTrackingService';
import LatLon from 'geodesy/latlon-nvector-spherical.js';

// obviously our AI is very sophisitcated :o)
export function determinePreselectedParkingLotId() {
  let location = getLocation();
  let parkingLotsWithCoordinates = getData();

  let locationLatLon = new LatLon(location.coords.latitude, location.coords.longitude);
  let mapParkingLotToDistance = new Map();

  for (let parkingLot of Object.values(parkingLotsWithCoordinates)) {
    let point = new LatLon(parkingLot.latitude, parkingLot.longitude);
    let distance = point.distanceTo(locationLatLon);
    mapParkingLotToDistance.set(parkingLot, distance);
  }

  let viableParkingLots = Object.values(parkingLotsWithCoordinates).filter(filterByDistanceAndUsage(mapParkingLotToDistance));
  let bestParkingLot = determineBestParkingLot(mapParkingLotToDistance, viableParkingLots);

  if (bestParkingLot) {
    return bestParkingLot.id
  } else {
    return null;
  }
}

function determineBestParkingLot(mapParkingLotToDistance, viableParkingLots) {
  let minDistance = Infinity;
  let bestParkingLot = null;
  for (let [parkingLot, distance] of mapParkingLotToDistance.entries()) {
    if (minDistance > distance && viableParkingLots.indexOf(parkingLot) !== -1) {
      minDistance = distance;
      bestParkingLot = parkingLot;
    }
  }
  return bestParkingLot;
}

function filterByDistanceAndUsage(mapParkingLotToDistance) {
  return (parkingLot) => {
    let distance = mapParkingLotToDistance.get(parkingLot);
    if (distance < 10000) {
      if (parkingLot.unoccupied >= 5) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  };
}