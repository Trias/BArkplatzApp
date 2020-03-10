import React from 'react';
import renderer from 'react-test-renderer';

import ClosableModal from '../ClosableModal';

it(`renders correctly`, () => {
  const tree = renderer.create(<ClosableModal 
    actionText={'action'}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
