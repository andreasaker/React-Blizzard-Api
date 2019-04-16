import React, {useState} from 'react';
import CharacterSearchForm from './forms/CharacterSearchForm';
import CharacterProfilePage from './pages/CharacterProfilePage';
import './app.css';

const App = () => {
    const [character, setCharacter] = useState({});
    
    

    return (
      <div class="medium-container">
      
            <CharacterSearchForm setCharacter={setCharacter} />
       
      <div class="flex-row">
        { Object.entries(character).length !== 0 &&
        <CharacterProfilePage character={character} />
        }
      </div>
      </div>
    );
  
}
//"eu", "Quel'Thalas", "Portvakt"
export default App;
