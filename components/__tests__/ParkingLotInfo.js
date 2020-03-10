import React from 'react';
import renderer from 'react-test-renderer';

import {ParkingLotInfo} from '../ParkingLotInfo';

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

jest.useFakeTimers();

it(`renders correctly`, () => {
  const tree = renderer.create(<ParkingLotInfo 
    parkingLotId={'38'}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
