import React from 'react';
import renderer from 'react-test-renderer';
import AlertBox from '../src/components/AlertBox';


test('renders correctly', () => {
  const tree = renderer.create(<AlertBox message="Message alert" />).toJSON();
  expect(tree).toMatchSnapshot();
});
