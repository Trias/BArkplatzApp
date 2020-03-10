import React from 'react';
import renderer from 'react-test-renderer';

import TimeTable from '../TimeTable';

it(`renders correctly`, () => {
  const tree = renderer.create(<TimeTable
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
