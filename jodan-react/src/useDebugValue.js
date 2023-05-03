import { useDebugValue, useState } from 'react';

function useIncrement(initialState) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + 1);
  useDebugValue(`count: ${count}`);
  return [count, increment];
}

function Example() {
  const [count, increment] = useIncrement(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
