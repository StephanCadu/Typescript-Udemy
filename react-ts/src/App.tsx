import React from 'react';
import './App.css';
import CounterValue from './components/CounterValue';

function App() {
  return (
    <div className="App">
      <CounterValue counter={2} />
    </div>
  );
}

export default App;
