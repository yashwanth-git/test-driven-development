import { useState } from 'react';
import './App.css';

function App() {
  const vendingOptions: { id: string; name: string; cost: number }[] = [
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
  const [amoutToBePaid, setAmountToBePaid] = useState(Number);

  const changeHandler = (e: { target: { value: string } }) => {
    let selectedItem = vendingOptions.filter((v) => v.name === e.target.value);
    setAmountToBePaid(selectedItem[0].cost);
  };
  return (
    <div className="App">
      <header className="Header">
        <h1>Vending Machine</h1>
      </header>
      <div className="selector">
        <select
          name="vending-machine"
          id="vending-machine"
          onChange={changeHandler}
        >
          {vendingOptions.map((opt) => (
            <option value={opt.name} key={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
        <div>{amoutToBePaid}</div>
      </div>
    </div>
  );
}

export default App;
