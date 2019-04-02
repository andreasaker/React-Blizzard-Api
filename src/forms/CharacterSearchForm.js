import React, {useState} from 'react';
import {getToken, getCharacterProfile, getRealmList } from '../api/Battlenet';

const CharacterSearchForm = props => {
    const profileData = {region: "eu", realm: "", name: ""}
    const [profile, setProfile] = useState(profileData);
    
    const [realmList, setRealmList] = useState([]);
    

    getRealmList().then(response => setRealmList(response));
  
    
    const handleChange = e => {
      const{name, value} = e.target
      setProfile({...profile, [name]: value});
    }

    const handleSubmit = e => {
      e.preventDefault();
      getChar(profile).then(response => props.setCharacter(response));
      setProfile(profileData);
    }

    async function getChar(params) {
      let t = await getToken();
      let c = await getCharacterProfile(t, params.region, params.realm, params.name);
      return c
    }
    
    const selectList = realmList.map(r =>
        <option key={r} value={r}>
          {r}
        </option>
    );

    return(
      
       <form onSubmit={handleSubmit}>
       <div class="flex-row">
       <div class="flex-small">
         <select name="realm" onChange={handleChange}>
           {selectList}
         </select>
        </div>
        <div class="flex-small">
         <input type="text" name="name" onChange={handleChange} />
        </div>
        </div>
       </form>
    );
  }
  

  
  export default CharacterSearchForm;