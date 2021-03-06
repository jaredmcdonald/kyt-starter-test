import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

it('Tests that the App renders.', () => {
  const wrapper = shallow(<HelloWorld />);
  expect(wrapper.text()).toBe('Hello World!');
});
