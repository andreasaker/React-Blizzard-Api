import React, {useState} from 'react';
import {getToken, getCharacterProfile, realmList } from '../api/Battlenet';

const CharacterSearchForm = props => {
    const profileData = {region: "eu", realm: "Quel'Thalas", name: "Portvakt"} //temp should be empty
    const [profile, setProfile] = useState(profileData);
    

    const handleChange = e => {
      const{name, value} = e.target
      setProfile({...profile, [name]: value});
    }

    const handleSubmit = e => {
      e.preventDefault();
      getChar(profile).then(response => {
        if(response["name"].toLowerCase() === profile.name.toLowerCase()){
          props.setCharacter(response)
          setProfile(profileData);
        }else{
          console.log("Character dose not exist")
          props.setCharacter({error: "Error"})
        }
      });

      
      
    }

    async function getChar(params) {
      let t = await getToken();
      let c = await getCharacterProfile(t, params.region, params.realm, params.name);
      console.log(c)
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
         <select name="realm" value={profile.realm} onChange={handleChange}>
         <option >Choose realm</option>
           {selectList}
         </select>
        </div>
        <div class="flex-small">
         <input type="text" name="name" value={profile.name} onChange={handleChange} />
        </div>
        </div>
       </form>
    );
  }
  

  
  export default CharacterSearchForm;