import React from 'react';

const Card = ({ cardClassname, title, details, children }) => {
  return (
    <div className={'card ' + (cardClassname || '')}>
      <div className='card__title'>{title}</div>
      <div className='card__details'>{details}</div>
      <div className='card__body'>{children}</div>
    </div>
  );
};

export default Card;
