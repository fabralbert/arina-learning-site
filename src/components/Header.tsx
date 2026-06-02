import React from 'react';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <a href='/'>
              Детская<span>Психология</span>
            </a>
          </div>
          <ul className='nav-links'>
            <li>
              <a href='#about'>О возрасте</a>
            </li>
            <li>
              <a href='#features'>Развитие</a>
            </li>
            <li>
              <a href='#emotions'>Эмоции</a>
            </li>
            <li>
              <a href='#tips'>Советы</a>
            </li>
            <li>
              <a href='#games'>Игры</a>
            </li>
            <li>
              <a href='#contact'>Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
