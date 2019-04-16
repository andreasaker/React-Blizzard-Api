import React from 'react';
import {classList} from '../api/Battlenet';

const CharacterProfilePage = props => {

    let characterProp = Object.keys(props.character).map(key => {
      if (key !== "appearance"){ 
        return <li key={key} >{key}: {props.character[key]} </li>
      }
    })

    const characterProfile = (
      
      <div class="flex-row">         
        <div class="flex-small">
          <img src={"https://render-eu.worldofwarcraft.com/character/" + props.character["thumbnail"]} alt="profile"/>
          <h1>{ props.character["name"] }</h1> 
          <div class="role">{ props.character["realm"] }, { classList[props.character["class"]] }</div>
          <div class="level">{ props.character["level"] }</div>    
        </div>
      </div>
      
    )

    return(
      <div class="flex-small">

          { props.character.hasOwnProperty('error') ?(
            <div class="vertical-center content-section">Cant find that character</div>
          ):(
            <div class="container character">
            {characterProfile}
            </div>
          )}
          
        
      </div>
    );
  
  }
  
  
  
  export default CharacterProfilePage;