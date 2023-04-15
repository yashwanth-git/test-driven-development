import { getChange } from './helpers';

// Denominations available: 1, 5, 10, 25, 50, 100
describe('Tests for Helpers', () => {
  test('getChange(1,1) should equal [] - an empty array', () => {
    let totalCost = 5;
    let amountPaid = 5;
    let result = getChange(totalCost, amountPaid);
    expect(result).toEqual([]);
  });
});
