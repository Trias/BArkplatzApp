import React from 'react';
import renderer from 'react-test-renderer';

import FAQList from '../FAQList';

it(`renders correctly`, () => {
  jest.useFakeTimers()
  const tree = renderer.create(<FAQList 
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
