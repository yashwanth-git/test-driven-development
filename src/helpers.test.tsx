import { getChange } from './helpers';

// Denominations available: 1, 5, 10, 25, 50, 100
describe('Tests for Helpers', () => {
  test('getChange(1,1) should equal [] - an empty array', () => {
    let result = getChange(5, 5);
    expect(result).toEqual([]);
  });
  test('getChange(215, 300) should return [50, 25, 10]', () => {
    let result = getChange(2.15, 3);
    let expectedResult = [50, 25, 10];
    expect(result).toEqual(expectedResult);
  });
  test('getChange(125, 200) should return [50, 25]', () => {
    let result = getChange(1.25, 2);
    let expectedResult = [50, 25];
    expect(result).toEqual(expectedResult);
  });
});
