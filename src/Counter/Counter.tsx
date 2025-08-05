import React, { useState } from "react";

export interface CounterProps {
  initial?: number;
  step?: number;
}

export const Counter: React.FC<CounterProps> = ({ initial = 0, step = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => setCount((c) => c + step);
  const decrement = () => setCount((c) => c - step);
  const reset = () => setCount(initial);

  return (
    <div>
      <h2 data-testid="count">{count}</h2>
      <button onClick={increment} data-testid="increment">
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement">
        Decrement
      </button>
      <button onClick={reset} data-testid="reset">
        Reset
      </button>
    </div>
  );
};

export default Counter;
