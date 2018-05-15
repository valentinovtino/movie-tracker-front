import { mockObj } from '../mockData';
import { fetchMovieData } from './api';

describe('API', () => {
  let url;

  beforeEach(() => {
    url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=b896e3605c38d8f6ffb3a181d5bb558d&language=en-US&include_adult=false&sort_by=created_at.asc';
    window.fetch= jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockObj)
    })
    ); 
  });

  it('should call fetch with the correct params', () => {
    fetchMovieData(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an film data object', async () => {
    let url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=b896e3605c38d8f6ffb3a181d5bb558d&language=en-US&include_adult=false&sort_by=created_at.asc';
    let actual = await fetchMovieData(url);

    expect(actual).toEqual(mockObj);

  });

  it('should throw an error when catch error is hit', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ status: 404 }));

    const expectedError = Error('TypeError: response.json is not a function');
    await expect(fetchMovieData(url)).rejects.toEqual(expectedError);
  });

});