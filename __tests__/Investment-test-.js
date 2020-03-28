import React from 'react';
import renderer from 'react-test-renderer';
import Investment from '../src/components/Investment';


test('renders correctly', () => {
  const tree = renderer.create(<Investment
    onPress={() => { }}
    description="Minha aposentadoria"
    title="Investimento I"
    value="R$ 26.000,00"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
