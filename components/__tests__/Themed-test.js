import * as React from 'react';
import renderer from 'react-test-renderer';

import { Text, View, Image } from '../Themed';

it(`renders text correctly`, () => {
  const tree = renderer.create(<Text>Snapshot test!</Text>).toJSON();

  expect(tree).toMatchSnapshot();
});



it(`renders view correctly`, () => {
  const tree = renderer.create(<View>Snapshot test!</View>).toJSON();

  expect(tree).toMatchSnapshot();
});



it(`renders image correctly`, () => {
  const tree = renderer.create(<Image src="https://randomuser.me/api/portraits/lego/0.jpg" />).toJSON();

  expect(tree).toMatchSnapshot();
});
