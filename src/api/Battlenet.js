



  const axios = require('axios');
  


  export let getToken = () => {
    axios.get(`https://eu.battle.net/oauth/token`, {
        auth: {
          username: process.env.REACT_APP_BNET_ID,
          password: process.env.REACT_APP_BNET_SECRET,
        },
        params: {
          grant_type: 'client_credentials',
        }
    }).then(function (response) {
      console.log(response);
      return response;
    }).catch(function (error) {
      console.log(error);
    });
  }


 
  
  export let getCharacterProfile = (region, realm, characterName) => {
    let token = getToken()
    let href = 'https://cors-anywhere.herokuapp.com/https://' + region + '.api.blizzard.com/wow/character/' +  realm + '/' + characterName + '?fields=appearance&access_token=' + token.data.access_token
    
    axios.get(href, {
        headers: {
          Authorization: 'Bearer ' + token.data.access_token
        }
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  }

