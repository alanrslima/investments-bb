import React from 'react';
import renderer from 'react-test-renderer';
import TitleBox from '../src/components/TitleBox';


test('renders correctly', () => {
  const tree = renderer.create(<TitleBox
    title="INVESTIMENTO"
    subTitle="R$"
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
