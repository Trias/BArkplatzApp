import React from 'react';
import renderer from 'react-test-renderer';

import TimeSelector from '../TimeSelector';

it(`renders correctly`, () => {
  const tree = renderer.create(<TimeSelector
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
