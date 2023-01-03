import React from 'react';
import Beach from '../assets/beach.jpg';
import Spain from '../assets/spain.jpg';
import Greece from '../assets/greece.jpg';

const Home = () => {
  return (
    <div>
      <section className='img-container'>
        <div className='holder'>
          <div className='img-card'>
            <img src={Beach} alt='wheres waldo at Paradise Beach, AU' />
          </div>
          <h2>Paradise Beach, Australia</h2>
        </div>
        <div className='holder'>
          <div className='img-card'>
            <img src={Spain} alt='wheres waldo at Bunol, Spain' />
          </div>
          <h2>Bunol, Spain</h2>
        </div>
        <div className='holder'>
          <div className='img-card'>
            <img src={Greece} alt='wheres waldo in Ancient Greece' />
          </div>
          <h2>Ancient Greece</h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
