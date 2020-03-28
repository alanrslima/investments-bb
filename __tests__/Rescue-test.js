import React from 'react';
import renderer from 'react-test-renderer';
import Intro from '../src/pages/Rescue';


test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});
