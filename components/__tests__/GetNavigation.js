import React from 'react';
import renderer from 'react-test-renderer';

import GetNavigation from '../GetNavigation';

it(`renders correctly`, () => {
  const tree = renderer.create(<GetNavigation 
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
