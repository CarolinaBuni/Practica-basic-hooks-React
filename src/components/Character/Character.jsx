import React, { useEffect, useState } from 'react';
import './Character.css';
import CharacterCard from '../CharacterCard/CharacterCard';

const Character = () => {

     const [ characters, setCharacters ] = useState( [] );

     useEffect( () => {
          const getCharacter = async () => {
               const response = await fetch( 'https://rickandmortyapi.com/api/character' );
               const data = await response.json();
               return data.results.map( ( character ) => ( {
                    id: character.id,
                    name: character.name,
                    gender: character.gender,
                    type: character.type,
                    species: character.species,
                    image: character.image,
                    status: character.status,
                    origin: character.origin.name,
                    location: character.location.name
               } ) );
          };
          getCharacter().then( ( characters ) => setCharacters( characters ) );
     }, [] );

     return (
          <div className='charactersContainer'>
               { characters.map( ( character ) => (
                    <CharacterCard key={ character.id } character={ character } />
               ) ) }
          </div>
     );
};

export default Character;