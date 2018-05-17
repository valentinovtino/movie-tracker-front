import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card'

describe('Card', () => {
  it('should render a card', () => {
    const wrapper = shallow(<Card />);

    expect(wrapper).toMatchSnapshot();
  });
});