import React from 'react';
import { gamesData } from '../data';

const GamesSection: React.FC = () => {
  return (
    <section id='games'>
      <div className='container'>
        <h2 className='section-title'>Игры для развития</h2>
        <p className='section-sub'>
          Интересные и полезные занятия, которые превратят обучение в радость.
        </p>
        <div className='games-grid'>
          {gamesData.map((game, idx) => (
            <div key={idx} className='game-card'>
              <div className='feature-icon'>{game.icon}</div>
              <h3>{game.title}</h3>
              <p>{game.desc}</p>
              <div className='game-tag'>{game.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
