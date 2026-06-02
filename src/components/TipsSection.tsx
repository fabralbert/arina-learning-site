import React from 'react';
import { tipsData } from '../data';

const TipsSection: React.FC = () => {
  return (
    <section id='tips'>
      <div className='container'>
        <h2 className='section-title'>Советы родителям</h2>
        <p className='section-sub'>
          Простые, но действенные рекомендации, которые помогут укрепить
          отношения с ребёнком.
        </p>
        <div className='tips-list'>
          {tipsData.map((tip, idx) => (
            <div key={idx} className='tip-item'>
              <div className='tip-icon'>{tip.icon}</div>
              <div className='tip-text'>
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;
