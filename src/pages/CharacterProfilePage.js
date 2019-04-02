import React from 'react';

const CharacterProfilePage = props => {
    
    let characterProp = Object.keys(props.character).map(key => {
      if (key !== "appearance"){ 
        return <li key={key} >{key}: {props.character[key]} </li>
      }
    })

    return(
      <div>
        <ul>
          {characterProp}
        </ul>
      </div>
    );
  
  }
  
  
  
  export default CharacterProfilePage;