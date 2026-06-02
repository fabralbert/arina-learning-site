import React from 'react';
import { featuresData } from '../data';

const FeaturesSection: React.FC = () => {
  return (
    <section id='features'>
      <div className='container'>
        <h2 className='section-title'>Как развивается дошкольник?</h2>
        <p className='section-sub'>
          Ведущая деятельность — игра, но активно развиваются все психические
          процессы.
        </p>
        <div className='features-grid'>
          {featuresData.map((item, idx) => (
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

export default FeaturesSection;
