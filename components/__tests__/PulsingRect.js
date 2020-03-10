import React from 'react';
import renderer from 'react-test-renderer';

import PulsingRect from '../PulsingRect';
jest.useFakeTimers();

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


it(`renders correctly`, () => {
  const tree = renderer.create(<PulsingRect
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
