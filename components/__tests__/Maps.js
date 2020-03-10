import React from 'react';
import renderer from 'react-test-renderer';

import MapView from 'react-native-maps';

import Maps from '../Maps';

jest.mock('react-native-maps', () => {
  const { View } = require('react-native');
  const MockMapView = (props) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

it(`renders correctly`, () => {
  const tree = renderer.create(<Maps 
    selectedParkingLotId={123}
    navigation={() => {}}
    onInfo={() => {}}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
