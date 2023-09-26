import './header.css' 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  }

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <>          
    <header>
    <Link to='/home'>
        <h1>
          MILES LOUNGE BAR
        </h1>
    </Link>
    <div className="header">
      {menuVisible ? (
        <div className="close-icon" onClick={closeMenu}>
          <i className="fas fa-times"></i>

          <ul>

            <Link to='/home'>Home</Link>
            <Link to='/cocktails'>Cocktails</Link>
            <Link to='/contact'>Contact</Link>

          </ul>
        </div>
      ) : (
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      )}

    </div>

    </header>

    </>




  )
}
export default Header;