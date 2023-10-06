import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbarStyles.css';
import { navbarItems } from './navbarItems';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className='navbarItems'>
      <h1 className='navbarLogo'>GTravel</h1>
      <div className='menuIcon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked?"navMenu active" : "navMenu"}>
        {navbarItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;