import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../src/components/Form';


test('renders correctly', () => {
  const tree = renderer.create(<Form
    action={{
      id: '1',
      nome: 'BBAS3',
      percentual: 41.1,
      formatedValue: 'R$ 10.320,00',
      value: 10320.00
    }}
    onChange={() => { }}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
