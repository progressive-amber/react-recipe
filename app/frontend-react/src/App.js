import React from 'react';

import amberLogo from './assets/amberLogo.png';
import reactLogo from './assets/reactLogo.png';
import './App.css';

import HelloAmber from './components/HelloAmber';
import HelloReact from './components/HelloReact';

function App() {
  return (
    <div className="App">
      <header>
        <img src={amberLogo} id="amber-logo" alt="Amber Logo" />
        <div/>
        <img src={reactLogo} id="react-logo" alt="React Logo" />
      </header>
      <body>
        <div>Reactive Amber</div>
        <HelloReact />
        <HelloAmber />
      </body>
    </div>
  );
}

export default App;
