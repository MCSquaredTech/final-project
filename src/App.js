import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { customer, address, phone } from './Functions/DataTypes.js'
import './App.css';

function App() {
  const [ customer, setCustomer ] = useState(customer);
  console.log(customer);
  const [ address, setAddress ] = useState(address); 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
