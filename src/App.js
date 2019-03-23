import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


const App = params => {
  let cors = require('cors');
  const axios = require('axios');
  let apiToken = {};

 

  const tokenRequest = () => {
    
    axios.get(`https://eu.battle.net/oauth/token`, {
        auth: {
          username: process.env.REACT_APP_BNET_ID,
          password: process.env.REACT_APP_BNET_SECRET,
        },
        params: {
          grant_type: 'client_credentials',
        }
    }).then(function (response) {
      console.log(response.data);
      apiToken = response;
    }).catch(function (error) {
      console.log(error);
    });
    
  }

 
  
  let getCharacterProfile = (region, realm, characterName) => {
    let href = 'https://' + region + '.battle.net/wow/character/' +  realm + '/' + characterName
 
    axios.get(href, {
        headers: {
          Authorization: 'Bearer ' + apiToken,
          'Access-Control-Allow-Origin': "*",
          'Access-Control-Allow-Credentials': true
        }
    }).then(function (response) {
      //apiToken = response;
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

  


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="#" onClick={tokenRequest}>
            request token
          </a>
          <a href="#" onClick={() => getCharacterProfile("eu", "Quel'Thalas", "Portvakt")}>
            request character
          </a>
        </header>
      </div>
    );
  
}

export default App;
