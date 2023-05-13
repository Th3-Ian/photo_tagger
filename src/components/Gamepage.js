import React from 'react';
import Waldo from '../assets/waldo.jpg';
import Wenda from '../assets/wenda.jpg';
import Wizard from '../assets/wizard.jpg';
import Odlaw from '../assets/odlaw.jpg';

// imgMap is an object thet holds the map name, and objects of each char name, and coords
// onClick event should trigger complete for char and update char-card with green outline
// Example https://www.youtube.com/watch?v=ednUWByH0_s
const Gamepage = ({ name, imgSrc, imgMap }) => {
  return (
    <div className='game-container'>
      <div className='gameboard-container'>
        <div className='character-container'>
          <h1>{name}</h1>
          <div className='char-card' id='waldo-card'>
            <img src={Waldo} alt='waldo' />
          </div>
          <div className='char-card' id='wenda-card'>
            <img src={Wenda} alt='wenda' />
          </div>
          <div className='char-card' id='wizard-card'>
            <img src={Wizard} alt='wizard' />
          </div>
          <div className='char-card' id='odlaw-card'>
            <img src={Odlaw} alt='odlaw' />
          </div>
        </div>
        <div className='board-container'>
          <img src={imgSrc} alt="where's waldo gameboard" useMap='' />
        </div>
      </div>
      <div>
        // Add zoom in and zoom out buttons for images
        https://codepen.io/aotabi_/pen/KbamNX/
        <a class='btn zoom'>
          <i class='fas fa-search-plus'></i>
        </a>
        <a class='btn zoom-out'>
          <i class='fas fa-search-minus'></i>
        </a>
      </div>
    </div>
  );
};

export default Gamepage;
