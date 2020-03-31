import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter number={0} />
      <hr />
      <Todos />
    </div>
  );
};

export default App;
