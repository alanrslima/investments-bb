import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../src/components/Button';


test('renders correctly', () => {
  const tree = renderer.create(<Button
    text="Text button"
    onPress={() => { }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
