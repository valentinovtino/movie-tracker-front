import { mockObj, mockCleanedData } from "../mockData";
import { cleanData } from './helper';

describe('Helper', () => {
  it('should clean data', () => { 
    let actual = cleanData(mockObj.results);     

    expect(actual).toEqual(mockCleanedData);
  });


});