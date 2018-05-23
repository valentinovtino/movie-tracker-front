import React from 'react';
import { shallow } from 'enzyme';
import CardHolder from './CardHolder';
import ReactDOM from 'react-dom';

describe('CardHolder', () => {
  let wrapper;
  let mockAddUserFavorite = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<CardHolder addUserFavorite={mockAddUserFavorite} movies={[]} userID={null} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});