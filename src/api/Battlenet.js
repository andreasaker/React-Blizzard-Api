

  const axios = require('axios');
  

  export const getToken = () => {
    return axios.get(`https://eu.battle.net/oauth/token`, {
        auth: {
          username: process.env.REACT_APP_BNET_ID,
          password: process.env.REACT_APP_BNET_SECRET,
        },
        params: {
          grant_type: 'client_credentials',
        }
    }).then(response => response)
  }
 
  export const getCharacterProfile = (token, region, realm, characterName) => {
    let href = 'https://cors-anywhere.herokuapp.com/https://' + region + '.api.blizzard.com/wow/character/' +  realm + '/' + characterName + '?fields=appearance&access_token=' + token.data.access_token

    return axios.get(href, {
        headers: {
          Authorization: 'Bearer ' + token.data.access_token
        }
    }).then(response => response.data)
  }

  export async function getRealmList(){
    let token = await getToken();
    let href = 'https://cors-anywhere.herokuapp.com/https://eu.api.blizzard.com/wow/realm/status?access_token=' + token.data.access_token

    return axios.get(href, {
        headers: {
          Authorization: 'Bearer ' + token.data.access_token
        }
    }).then(response => {
      return getEuRealmNames(response.data.realms)
    })
  }
  
  const getEuRealmNames = realms => {
    let list = []
    Object.values(realms).forEach(value => {
            if (value["locale"] ===  "en_GB"){
                list.push(value["name"]) 
            }
    })
    return list;
  }

