import React from 'react';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const match = useRouteMatch({ path: '/', exact: true });
  const btnText = !!match ? 'Get Ward Details' : 'Go To Main Dashboard';
  const btnText2 = 'View Dataset';
  const href = !!match ? '/ward-details' : '/';
  const handleClick = () => {
    window.open(
      'https://www.kaggle.com/vivishwan/all-vaccination-centres-in-mumbai'
    );
  };

  return (
    <nav className='Navbar'>
      <header className='Navbar__header'>Covid Blog</header>
      <Link className='Navbar__btn' to={href}>
        {btnText}
      </Link>
      <div className='Navbar__btn' onClick={handleClick}>
        {btnText2}
      </div>
      {/* <div className='Navbar__btn'>{btnText2}</div> */}
    </nav>
  );
};

export default Navbar;
