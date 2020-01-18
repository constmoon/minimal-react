import React, { useState } from 'react';
import './App.css';

const Counter = ({ initalNumber }) => {
  const [count, setCount] = useState(initalNumber);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <p>{count}</p>
    </>
  );
};

function App() {
  const initalNumber = 0;
  return (
    <div className="App">
      <Counter initalNumber={initalNumber} />
    </div>
  );
}

export default App;
