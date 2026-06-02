import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-links'>
          <a href='#about'>О дошкольном возрасте</a>
          <a href='#tips'>Советы</a>
          <a href='#games'>Игротека</a>
          <a href='#'>Политика конфиденциальности</a>
        </div>
        <div className='copyright'>
          <p>
            © 2025 ДетскаяПсихология — ресурс для заботливых родителей. Все
            материалы носят ознакомительный характер.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
