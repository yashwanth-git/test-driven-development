const cointypes = [100, 50, 25, 10, 5, 1];
export const getChange = (totalCost: number, amountPaid: number) => {
  console.log(totalCost, amountPaid);
  let difference = (amountPaid - totalCost) * 100;
  let change: number[] = [];

  cointypes.forEach(function (coin) {
    // keep adding the current coin until it's more than the difference
    while (difference >= coin) {
      change.push(coin);
      difference = difference - coin;
    }
  });

  return change;
};
