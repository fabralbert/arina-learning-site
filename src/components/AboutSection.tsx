import React from 'react';
import { aboutData } from '../data';

const AboutSection: React.FC = () => {
  return (
    <section id='about'>
      <div className='container'>
        <h2 className='section-title'>Дошкольный возраст: волшебный период</h2>
        <p className='section-sub'>
          От 3 до 7 лет — время активного познания мира, становления личности и
          главной роли игры.
        </p>
        <div className='features-grid'>
          {aboutData.map((item, idx) => (
            <div key={idx} className='feature-card'>
              <div className='feature-icon'>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
