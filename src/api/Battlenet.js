

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
    }).then(response => response.data).catch(error => error)
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

export const classList = [
  "None",
  "Warrior",
  "Paladin",
  "Hunter",
  "Rogue",
  "Priest", 
  "DeathKnight",
  "Shaman",
  "Mage",
  "Warlock",
  "Monk",
  "Druid",
  "Demon Hunter"
]

export const realmList = [
  "Aerie Peak",
  "Agamaggan",
  "Aggramar",
  "Ahn'Qiraj",
  "Al'Akir",
  "Alonsus",
  "Anachronos",
  "Arathor",
  "Argent Dawn",
  "Aszune",
  "Auchindoun",
  "Azjol-Nerub",
  "Azuremyst",
  "Balnazzar",
  "Blade's Edge",
  "Bladefist",
  "Bloodfeather",
  "Bloodhoof",
  "Bloodscalp",
  "Boulderfist",
  "Bronze Dragonflight",
  "Bronzebeard",
  "Burning Blade",
  "Burning Legion",
  "Burning Steppes",
  "Chamber of Aspects",
  "Chromaggus",
  "Crushridge",
  "Daggerspine",
  "Darkmoon Faire",
  "Darksorrow",
  "Darkspear",
  "Deathwing",
  "Defias Brotherhood",
  "Dentarg",
  "Doomhammer",
  "Draenor",
  "Dragonblight",
  "Dragonmaw",
  "Drak'thul",
  "Dunemaul",
  "Earthen Ring",
  "Emerald Dream",
  "Emeriss",
  "Eonar",
  "Executus",
  "Frostmane",
  "Frostwhisper",
  "Genjuros",
  "Ghostlands",
  "Grim Batol",
  "Hakkar",
  "Haomarush",
  "Hellfire",
  "Hellscream",
  "Jaedenar",
  "Karazhan",
  "Kazzak",
  "Khadgar",
  "Kilrogg",
  "Kor'gall",
  "Kul Tiras",
  "Laughing Skull",
  "Lightbringer",
  "Lightning's Blade",
  "Magtheridon",
  "Mazrigos",
  "Moonglade",
  "Nagrand",
  "Neptulon",
  "Nordrassil",
  "Outland",
  "Quel'Thalas",
  "Ragnaros",
  "Ravencrest",
  "Ravenholdt",
  "Runetotem",
  "Saurfang",
  "Scarshield Legion",
  "Shadowsong",
  "Shattered Halls",
  "Shattered Hand",
  "Silvermoon",
  "Skullcrusher",
  "Spinebreaker",
  "Sporeggar",
  "Steamwheedle Cartel",
  "Stormrage",
  "Stormreaver",
  "Stormscale",
  "Sunstrider",
  "Sylvanas",
  "Talnivarr",
  "Tarren Mill",
  "Terenas",
  "Terokkar",
  "The Maelstrom",
  "The Sha'tar",
  "The Venture Co",
  "Thunderhorn",
  "Trollbane",
  "Turalyon",
  "Twilight's Hammer",
  "Twisting Nether",
  "Vashj",
  "Vek'nilash",
  "Wildhammer",
  "Xavius",
  "Zenedar"
]
