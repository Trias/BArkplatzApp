import LatLon from 'geodesy/latlon-nvector-spherical.js';

  export function getCartesianCoordiantesFromGeoCoordinates(orientation, location){
    const {latitudeOrigin, latitudeEnd, longitudeOrigin, longitudeEnd, azimuth, widthInPx, heightInPx, fudgeFactorX, fudgeFactorY} = orientation;

    const topLeft = new LatLon(latitudeOrigin, longitudeOrigin);
    const bottomRight = new LatLon(latitudeEnd, longitudeEnd);
    const topRight = LatLon.intersection(topLeft, -azimuth + 90, bottomRight, -azimuth);
    const bottomLeft = LatLon.intersection(topLeft, -azimuth + 180, bottomRight, -azimuth-90);
    
    const locationLatLon = new LatLon(location.latitude, location.longitude);
  
    const xFactorPxPerMeter = widthInPx/topLeft.distanceTo(topRight)*fudgeFactorX; // varies up to 8 px (ca half a meter... maybe b/c of wgs84 vs spherical??)
    const yFactorPxPerMeter = heightInPx/topLeft.distanceTo(bottomLeft)*fudgeFactorY; // very precise, up to half a pixel
  
    const locationXDiff = LatLon.intersection(topLeft, -azimuth + 90, locationLatLon, -azimuth)
    const locationYDiff = LatLon.intersection(topLeft, -azimuth + 180, locationLatLon, -azimuth-90)
  
    const locationXDiffInMeter = locationXDiff.distanceTo(topLeft);
    const locationYDiffInMeter = locationYDiff.distanceTo(topLeft);
  
    const locationXDiffInPx = xFactorPxPerMeter*locationXDiffInMeter;
    const locationYDiffInPx = yFactorPxPerMeter*locationYDiffInMeter;
  
    return {x:locationXDiffInPx, y: locationYDiffInPx};
  }