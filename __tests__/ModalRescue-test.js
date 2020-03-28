import React from 'react';
import renderer from 'react-test-renderer';
import ModalRescue from '../src/components/ModalRescue';


test('renders correctly', () => {
  const tree = renderer.create(<ModalRescue
    isVisible
    onCancel={() => { }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
