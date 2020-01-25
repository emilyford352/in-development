import React from 'react';
import logo from './logo.svg';
import Eevee from './eevee.jpg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          This website is in development; check back soon!
        </div>
        <div style={{marginTop: '20px'}}>
          <img alt="dog" width="200px" height="250px" src={Eevee}/>
        </div>
      </header>
    </div>
  );
}

export default App;
