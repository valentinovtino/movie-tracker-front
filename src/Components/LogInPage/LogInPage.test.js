import React from 'react';
import LogInPage from './LogInPage';
import { shallow, mount } from 'enzyme';

describe('LogInPage', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LogInPage userHasErrored={false, ''} postUser={jest.fn} fetchUser={jest.fn} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('HANDLE_CHANGE', () => {
    it('should update state on user input', () => {
      const mockEvent = {
        target: {
          value: 'CoolGuy@aol.com',
          name: 'email'
        }
      };
  
      const expectedState = {
        userLoggedIn: false,
        errorMessage: '',
        formState: 'create-user',
        name: '',
        email: 'CoolGuy@aol.com',
        password: ''
      };
  
      wrapper.instance().handleChange(mockEvent);
  
      expect(wrapper.state()).toEqual(expectedState);
    });
  });

  describe('REQUEST_FORM', () => {
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
  });


  describe('HANDLE_SUBMIT', () => {
    let mockPostUser;
    let mockFetchUser;
    let wrapper;

    beforeEach(() => {
      mockPostUser = jest.fn().mockImplementation(() => false);
      mockFetchUser = jest.fn().mockImplementation(()=> false);

      wrapper = shallow(<LogInPage userHasErrored={false, ''} postUser={mockPostUser} fetchUser={mockFetchUser}/>);
    });

    it('should change userLoggedIn state to true if there was no error when handleSubmiti is called', async () => {
      await wrapper.instance().handleSubmit({preventDefault: jest.fn()});

      expect(wrapper.state('userLoggedIn')).toEqual(true);
    });

    it('should call postUser with the correct params if formState state is "create-user"', async () => {
      let expected = wrapper.state();
      expect(wrapper.state('formState')).toBe('create-user');

      await wrapper.instance().handleSubmit({preventDefault: jest.fn()});

      expect(mockPostUser).toHaveBeenCalledWith(expected);
    });

    it('should call fetchUser with the correct params if fomrState state is "log-in"', async () => {
      let expected = {email: 'coolGuy@aol.com', password: 'secretlyNotCool'};
      wrapper.setState({
        userLoggedIn: false,
        errorMessage: '',
        formState: 'log-in',
        name: 'Cool Guy',
        email: 'coolGuy@aol.com',
        password: 'secretlyNotCool'
      });

      await wrapper.instance().handleSubmit({preventDefault: jest.fn()});

      expect(mockFetchUser).toHaveBeenCalledWith(expected);
    });

    it('should call handleSubmit on form submit', () => {
       wrapper = mount(<LogInPage userHasErrored={false, ''} postUser={mockPostUser} fetchUser={mockFetchUser}/>);
      const spy = spyOn(wrapper.instance(), 'handleSubmit');
      wrapper.instance().forceUpdate();

      wrapper.find('form').simulate('submit');

      expect(spy).toHaveBeenCalled();
    });
  });

  it('should redirect user when userLoggedIn state is true', () => {
    expect(wrapper.find('Redirect').length).toBe(0);

    wrapper = shallow(<LogInPage userHasErrored={false, ''} postUser={jest.fn} fetchUser={jest.fn}/>);
    wrapper.setState({userLoggedIn: true});

    expect(wrapper.find('Redirect').length).toBe(1);
  });

  it('should render 3 inputs when Create Account button is clicked', () => {

    wrapper.find('button.create-user').simulate('click');

    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should render 2 inputs when Log In button is clicked', () => {

    wrapper.find('button.log-in').simulate('click');

    expect(wrapper.find('input').length).toEqual(2);
  });
});
