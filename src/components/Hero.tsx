import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <div className='container hero-content'>
        <h1>Психология дошкольного возраста</h1>
        <p>
          Как понять ребёнка 3–7 лет? Узнайте, как проходит развитие, какие
          кризисы ждут, и как поддержать малыша мягко и с любовью.
        </p>
        <a href='#tips' className='hero-btn'>
          Советы родителям <i className='fas fa-arrow-right'></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
