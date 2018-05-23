import React from 'react';
import { shallow, mount } from 'enzyme';
import FavoriteCard from './FavoriteCard';

describe('Card', () => {
  let wrapper;
  let movie = {
    title: 'Movie',
    average_rating: 5,
    release_date: '2018-05-01',
    overview: 'This is a movie...',
    poster_path: '/asdlflkj.jpg'
  };

  let mockAddUserFavorite = jest.fn();

  beforeEach(() => {
    wrapper = mount(<FavoriteCard 
      movie={movie} 
      key={movie.id} 
      addUserFavorite={mockAddUserFavorite} 
      userID={15} />);
  });

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleFavorite on button click', () => {
    const spy = spyOn(wrapper.instance(), 'handleFavorite');

    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should redirect user if hasErrored state is true', () => {
    wrapper = shallow(<FavoriteCard 
      movie={movie} 
      key={movie.id} 
      addUserFavorite={mockAddUserFavorite} 
      userID={15} />);
    
    expect(wrapper.find('Redirect').length).toEqual(0);    
    wrapper.setState({hasErrored: true});

    expect(wrapper.find('Redirect').length).toEqual(1);
  });

  it('should set hasErrored state to true if a user does not exists', () => {
    wrapper = shallow(<FavoriteCard 
      movie={movie} 
      key={movie.id} 
      addUserFavorite={mockAddUserFavorite} 
      userID={null} />);

    wrapper.instance().handleFavorite();

    expect(wrapper.state('hasErrored')).toBe(true);   
  });

  it('should call addUserFavorite with the correct params if a user exists', () => {
    let mockMovie = {
      average_rating: 5,
      overview: "This is a movie...",
      poster_path: "/asdlflkj.jpg",
      release_date: "2018-05-01",
      title: "Movie"
    };

    let mockUserID = 15;
    wrapper.instance().handleFavorite();

    expect(mockAddUserFavorite).toHaveBeenCalledWith(mockMovie, mockUserID);
  });
});