import React from 'react';
import renderer from 'react-test-renderer';

import {FilterTabs} from '../FilterTabs';

it(`renders correctly`, () => {
  const tree = renderer.create(<FilterTabs 
    filters={['Alle', 'Elektro']}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
