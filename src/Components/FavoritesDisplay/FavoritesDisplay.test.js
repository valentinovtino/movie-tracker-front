import React from 'react';
import { shallow } from 'enzyme';
import { FavoritesDisplay } from './FavoritesDisplay';
import ReactDOM from 'react-dom';

describe('FAVORITES DISPLAY', () => {
  let wrapper;
  let mockFaves = [{movie: 'Move'}];

  beforeEach(() => {
    wrapper = shallow(<FavoritesDisplay favorites={mockFaves} user_ID={null} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render cards if favorites array has objects', () => {
    expect(wrapper.find('FavoriteCard').length).toEqual(1);
  });

  it('should render h3 message element if there are no favorites', () => {
    wrapper = shallow(<FavoritesDisplay favorites={[]} user_ID={null} />);

    expect(wrapper.find('FavoriteCard').length).toEqual(0);
    expect(wrapper.find('h3').length).toEqual(1);
  });
});
