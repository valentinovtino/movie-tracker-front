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
      email: 'CoolGuy@aol.com',
      password: ''
    };

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state()).toEqual(expectedState)
  });
});