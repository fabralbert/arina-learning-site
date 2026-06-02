import React from 'react';
import { emotionsData } from '../data';

const EmotionsSection: React.FC = () => {
  return (
    <section id='emotions'>
      <div className='container'>
        <h2 className='section-title'>Эмоциональный мир</h2>
        <p className='section-sub'>
          Дошкольники учатся понимать свои чувства и управлять ими. Ваша
          поддержка — основа эмоционального интеллекта.
        </p>
        <div className='features-grid'>
          {emotionsData.map((item, idx) => (
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

export default EmotionsSection;
