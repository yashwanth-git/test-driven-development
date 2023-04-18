import { FormEvent, useState } from 'react';
import './App.css';
import { getChange } from './helpers';
import PaymentForm from './PaymentForm';

export type VendingOptionsProps = {
  id: string;
  name: string;
  cost: number;
};

export type PaymentProps = {
  amountPaid: number;
};

function App() {
  const vendingOptions: VendingOptionsProps[] = [
    {
      id: 'Pringles',
      name: 'Pringles',
      cost: 1.25,
    },
    {
      id: 'Snickers',
      name: 'Snickers',
      cost: 1,
    },
    {
      id: 'Gems',
      name: 'Gems',
      cost: 0.75,
    },
  ];
  const [amountToBePaid, setAmountToBePaid] = useState(Number);
  const [returns, setReturns] = useState<Number[]>([]);

  const changeHandler = (e: { target: { value: string } }) => {
    let selectedItem = vendingOptions.filter((v) => v.name === e.target.value);
    setAmountToBePaid(selectedItem[0].cost);
  };

  const submitPaymentHandler = ({ amountPaid }: PaymentProps) => {
    setReturns(getChange(amountToBePaid, amountPaid));
  };
  return (
    <div className="app">
      <header className="header">
        <h1>Vending Machine</h1>
      </header>
      <div className="table">
        <div className="table-header">
          <div className="heading">Serial No</div>
          <div className="heading">Available Items</div>
          <div className="heading">Amount</div>
          <div className="heading">Paid</div>
          <div className="heading">Amount Returned</div>
        </div>
        <div className="row">
          <div className="col">
            <span>1</span>
          </div>
          <div className="col">
            <div className="selector">
              <select
                name="vending-machine"
                id="vending-machine"
                onChange={changeHandler}
              >
                <option>Please select</option>
                {vendingOptions.map((opt) => (
                  <option value={opt.name} key={opt.id}>
                    {opt.name}
                  </option>
                ))}
              </select>
              <div></div>
            </div>
          </div>
          <div className="col">
            <span className="amount">{amountToBePaid}</span>
          </div>
          <div className="col">
            <PaymentForm onSubmit={submitPaymentHandler} amountPaid={0} />
          </div>
          <div className="col">
            <span className="return">{String(returns)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
