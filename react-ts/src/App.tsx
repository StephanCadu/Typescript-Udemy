import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter initialValue={4321} />
    </div>
  );
}

export default App;
