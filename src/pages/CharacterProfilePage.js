import React from 'react';

const CharacterProfilePage = props => {
    
    let characterProp = Object.keys(props.character).map(key => {
      if (key !== "appearance"){ 
        return <li key={key} >{key}: {props.character[key]} </li>
      }
    })
    return(
      <div class="flex-small">
        
          { props.character.hasOwnProperty('error') ?(
            <div class="vertical-center content-section">Cant find that character</div>
          ):(
            <ul>
            {characterProp}
            </ul>
          )}
          
        
      </div>
    );
  
  }
  
  
  
  export default CharacterProfilePage;