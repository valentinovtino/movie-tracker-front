import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { mockObj } from '../../mockData.js';
describe('App', () => {
  let wrapper;
  let mockUserLoggedOut = jest.fn();
  let mockStoreMovies = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<App user={{}} storeMovies={mockStoreMovies} userLoggedOut={mockUserLoggedOut}/>, {disableLifecycleMethods: true})
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Log Out button if there is a user', () => {
    wrapper = shallow(<App user={{name: 'elvis'}} storeMovies={mockStoreMovies} userLoggedOut={mockUserLoggedOut}/>, {disableLifecycleMethods: true})

    expect(wrapper.find('.log-out-button').length).toEqual(1);
    expect(wrapper.find('.log-in-button').length).toEqual(0);
  });

  it('should render Log In button if there is no user', () => {
    expect(wrapper.find('.log-in-button').length).toEqual(1);
    expect(wrapper.find('.log-out-button').length).toEqual(0);
  });

  it('should call userLoggedOut callback when button is clicked', () => {
    wrapper = shallow(<App user={{name: 'elvis'}} storeMovies={mockStoreMovies} userLoggedOut={mockUserLoggedOut}/>, {disableLifecycleMethods: true})

    wrapper.find('.log-out-button').simulate('click');

    expect(mockUserLoggedOut).toHaveBeenCalled();
  });

  it('should call storeMovies on componentDidMount', async ()=> {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({json: () => Promise.resolve(mockObj)}))

    await wrapper.instance().componentDidMount();

    expect(mockStoreMovies).toHaveBeenCalledWith(mockObj.results);
  });

});









