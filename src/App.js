import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getCharacterProfile} from './api/Battlenet';

const App = () => {

   
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          
          </p>
          <a href="#" onClick={getCharacterProfile("eu", "Quel'Thalas", "Portvakt")}>
            request character
          </a>
          
        </header>
      </div>
    );
  
}
//"eu", "Quel'Thalas", "Portvakt"
export default App;
