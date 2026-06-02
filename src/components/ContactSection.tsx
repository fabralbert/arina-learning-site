import React from 'react';
import { FaEnvelopeOpenText, FaAt } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <div className='contact-card'>
          <FaEnvelopeOpenText
            style={{
              fontSize: '2.5rem',
              color: '#C26E3C',
              marginBottom: '16px',
            }}
          />
          <h3>Нужна консультация?</h3>
          <p>
            Если у вас возникли вопросы по воспитанию или развитию дошкольника,
            напишите нам. Мы поделимся полезными материалами и поддержим.
          </p>
          <p>
            <FaAt />{' '}
            <a href='mailto:psy.deti@example.com'>psy.deti@example.com</a>
          </p>
          <p style={{ marginTop: '16px', fontSize: '0.85rem' }}>
            или подписывайтесь на наши соцсети (в разработке 😊)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
