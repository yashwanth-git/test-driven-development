type getChangeProps = {
  totalCost: Number;
  amountPaid: Number;
  change: Number[];
};

export const getChange = ({
  totalCost,
  amountPaid,
  change = [],
}: getChangeProps) => {
  return change;
};
