import { mockObj } from '../mockData';
import { fetchMovieData } from './api';

describe('API', () => {
  it('should call fetch with the correct params', () => {
      
  })

  it('should return an film data object', async () => {
    window.fetch= jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockObj)
    })
    ); 


    let url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=b896e3605c38d8f6ffb3a181d5bb558d&language=en-US&include_adult=false&sort_by=created_at.asc';


    let actual = await fetchMovieData(url);

    expect(actual).toEqual(mockObj);

  });
});