import React from 'react';
import renderer from 'react-test-renderer';
import Rescue from '../src/pages/Rescue';


test('renders correctly', () => {
  const tree = renderer.create(<Rescue />).toJSON();
  expect(tree).toMatchSnapshot();
});
