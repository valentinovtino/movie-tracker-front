import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './Card';
import ReactDOM from 'react-dom'

describe('Card', () => {
  let wrapper;
  let mockMovie = {};
  let mockUserID;
  let mockFunction = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Card addUserFavorite={mockFunction} movie={mockMovie} userID={mockUserID} />);

  });

  it('should render a card', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFavorite when Add to favorites button is clicked', () => {
    wrapper = mount(<Card addUserFavorite={mockFunction} movie={mockMovie} userID={mockUserID} />);

    const spy = spyOn(wrapper.instance(), 'handleFavorite');

    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click')

    expect(spy).toHaveBeenCalled()
  });

  it('should set hasErrored state to true if handleFavorite is called and there is not a user', () => {
    expect(wrapper.state('hasErrored')).toBe(false);

    wrapper.instance().handleFavorite();

    expect(wrapper.state('hasErrored')).toBe(true);
  });

  it('should call addUserFavorite if handleFavorite is called and there is a user', () => {
     wrapper = shallow(<Card addUserFavorite={mockFunction} movie={mockMovie} userID={15} />);

    wrapper.instance().handleFavorite();

    expect(mockFunction).toHaveBeenCalled()
  });

  it('should redirect to login page if hasErrored state is true', () => {
    wrapper.setState({hasErrored: true});

    expect(wrapper.find('Redirect').length).toEqual(1);
  });
});