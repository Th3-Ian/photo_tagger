import React from 'react';
import Waldo from '../assets/waldo.jpg';
import Wenda from '../assets/wenda.jpg';
import Wizard from '../assets/wizard.jpg';
import Odlaw from '../assets/odlaw.jpg';

const Gamepage = ({ name, imgSrc }) => {
  return (
    <div className='game-container'>
      <div className='character-container'>
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
      <div className='gameboard-container'>
        <h1>{name}</h1>
        <img src={imgSrc} alt="where's waldo gameboard" />
      </div>
    </div>
  );
};

export default Gamepage;
