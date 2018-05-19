import React from 'react';
import LogInPage from './LogInPage';
import { shallow, mount } from 'enzyme';

describe('LogInPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LogInPage />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an initial state of email and password, set to empty strings', () => {
    const expected = {
      formState: 'create-user',
      name: '',
      email: '',
      password: ''
    };
    
    expect(wrapper.state()).toEqual(expected);
  });

  it('should update state on user input', () => {
    const mockEvent = {
      target: {
        value: 'CoolGuy@aol.com',
        name: 'email'
      }
    };

    const expectedState = {
      formState: 'create-user',
      name: '',
      email: 'CoolGuy@aol.com',
      password: ''
    };

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state()).toEqual(expectedState)
  });

  it('should call requestForm when button is clicked', () => {
    const spy = spyOn(wrapper.instance(), 'requestForm');
    wrapper.instance().forceUpdate();

    wrapper.find('button.create-user').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should call requestForm when button is clicked', () => {
    const spy = spyOn(wrapper.instance(), 'requestForm');
    wrapper.instance().forceUpdate();

    wrapper.find('button.log-in').simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should render 3 inputs when Create Account button is clicked', () => {

    wrapper.find('button.create-user').simulate('click')

    expect(wrapper.find('input').length).toEqual(3)
  });

  it('should render 3 inputs when Log In button is clicked', () => {

    wrapper.find('button.log-in').simulate('click')

    expect(wrapper.find('input').length).toEqual(2)
  });

});
























