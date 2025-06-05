// CounterComponent.jsx
import React from 'react';
import Counter from './useCounter';
import { add } from './utils';

function CounterComponent() {
  const { count, increment, decrement } = Counter(5);
  const sum = add(3, 4); // using regular function

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>

      <h3>3 + 4 = {sum}</h3>
    </div>
  );
}

export default CounterComponent;
