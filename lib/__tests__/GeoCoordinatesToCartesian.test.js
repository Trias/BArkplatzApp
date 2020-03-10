import { getCartesianCoordiantesFromGeoCoordinates } from '../GeoCoordinatesToCartesian.js';

describe('GeoCoordinatesToCartesian', () => {
  const orientation = {
    latitudeOrigin: 49.9022971227527,
    latitudeEnd: 49.90113355396578,
    longitudeOrigin: 10.899680361263167,
    longitudeEnd: 10.900085956390571,
    azimuth: 305.9866071428564,
    widthInPx: 1000,
    heightInPx: 578,
    fudgeFactorX: 1.57,
    fudgeFactorY: 1.2,
  }

  test('origin point should be zero', () => {
    const location = { // origin point
      latitude: 49.9022971227527,
      longitude: 10.899680361263167
    }

    expect(getCartesianCoordiantesFromGeoCoordinates(orientation, location)).toStrictEqual({ x: 0, y: 0 });
  });

  test('end point should be px width', () => {
    const location = { // end point
      latitude: 49.90113355396578,
      longitude: 10.900085956390571
    }

    expect(getCartesianCoordiantesFromGeoCoordinates(orientation, location)).toStrictEqual({ x: 1570, y: 693.6 });
  });


  test('should calculate some other point', () => {
    const location = { // some parking spot
      "latitude": 49.90119243397117,
      "longitude": 10.900101395156677,
    }

    expect(getCartesianCoordiantesFromGeoCoordinates(orientation, location)).toStrictEqual({ x: 1510.0683353108125, y: 630.9782792971029 });
  });
})
