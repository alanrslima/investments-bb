import React from 'react';
import renderer from 'react-test-renderer';
import Investments from '../src/pages/Investments';


test('renders correctly', () => {
  const tree = renderer.create(<Investments />).toJSON();
  expect(tree).toMatchSnapshot();
});