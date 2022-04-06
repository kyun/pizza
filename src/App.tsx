import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="pizza-box">
        <div className="pizza Domino-lg" />
        <div className="pizza Domino-md" />
        <div className="pizza Costco" />
      </div>
      <div>
        <label>
          <input type="checkbox" />
          <span>Domino</span>
        </label>

      </div>
    </div>
  );
}

export default App;
