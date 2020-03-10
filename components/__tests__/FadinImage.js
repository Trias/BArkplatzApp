import React from 'react';
import renderer from 'react-test-renderer';

import FadeInImage from '../FadeInImage';

jest.useFakeTimers()

it(`renders correctly`, () => {
  const tree = renderer.create(<FadeInImage 
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
