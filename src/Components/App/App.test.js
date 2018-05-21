import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';


describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App user={{}} storeMovies={jest.fn} userLoggedOut={jest.fn}/>, {disableLifecycleMethods: true})
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Log Out button if there is a user', () => {
    wrapper = shallow(<App user={{name: 'elvis'}} storeMovies={jest.fn} userLoggedOut={jest.fn}/>, {disableLifecycleMethods: true})

    expect(wrapper.find('.log-out-button').length).toEqual(1);
  });

  it('should render Log In button if there is no user', () => {
    expect(wrapper.find('.log-in-button').length).toEqual(1);
    expect(wrapper.find('.log-out-button').length).toEqual(0);
  });

  // it('should call userLoggedOut callback when button is clicked', () => {
  //   wrapper = shallow(<App user={{name: 'elvis'}} storeMovies={jest.fn} userLoggedOut={jest.fn()}/>, {disableLifecycleMethods: true})

  //   wrapper.find('.log-out-button').simulate('click')

  //   expect(wrapper.prop('userLoggedOut')).toHaveBeenCalled();
  // });

});