import React from 'react';
import RotatingImage from '../RotatingImage/RotatingImage';
import './CharacterCard.css';

const CharacterCard = ( { character } ) => (
     <div className='character'>
          <div className='imageContainer'>
               <RotatingImage src={ character.image } alt={ character.name } />
          </div>
          <h2>{ character.name }</h2>
          <p><span>Gender:</span> { character.gender }</p>
          <p><span>Type:</span> { character.type.length > 0 ? character.type : 'No tiene tipo asignado' }</p>
          <p><span>Species:</span> { character.species }</p>
          <p><span>Status:</span> { character.status }</p>
          <p><span>Origin:</span> { character.origin }</p>
          <p><span>Location:</span> { character.location }</p>
     </div>
);

export default CharacterCard;
