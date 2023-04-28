import { getChange } from './helpers';

// Denominations available: 1, 5, 10, 25, 50, 100
describe('Tests for Helpers', () => {
  describe.each([
    { a: 1, b: 1, expected: [] },
    { a: 2.15, b: 3, expected: [50, 25, 10] },
    { a: 1.25, b: 2, expected: [50, 25] },
  ])('getChange($a, $b)', ({ a, b, expected }) => {
    test(`returns ${expected}`, () => {
      expect(getChange(a, b)).toEqual(expected);
    });
  });
});
