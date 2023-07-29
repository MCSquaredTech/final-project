import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { company, address, phone } from './Functions/DataTypes'
import './App.css';

function App() {
  const [ customer, setCustomer ] = useState(company);
  const [ customerAddress, setCustomerAddress ] = useState(address); 
  const [ customerPhone, setCustomerPhone ] = useState(phone);

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
