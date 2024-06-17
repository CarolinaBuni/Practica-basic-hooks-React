import React from 'react';
import './RotatingImage.css'

const RotatingImage = ( { src, alt } ) => {
     const handleImageClick = ( e ) => {
          e.target.classList.toggle( 'rotate' );
     };
     return <img onClick={ handleImageClick } src={ src } alt={ alt } />;
};

export default RotatingImage;