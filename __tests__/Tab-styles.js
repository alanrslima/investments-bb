import React from 'react';
import renderer from 'react-test-renderer';
import Tab from '../src/components/Tab';


test('renders correctly', () => {
  const tree = renderer.create(<Tab
    description="Investimento I"
    title="Nome"
    error="Nome inválido"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
