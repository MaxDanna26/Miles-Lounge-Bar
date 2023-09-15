import './header.css' 
import React, { useState } from 'react';


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

        <h1>
            MILES LOUNGE BAR
        </h1>

    <div className="header">
      {menuVisible ? (
        <div className="close-icon" onClick={closeMenu}>
          <i className="fas fa-times"></i>
          <ul>
            <a href='#home'><li>Home</li></a>
            <li>Cocktails</li>
            <li>Contact</li>
          </ul>
        </div>
      ) : (
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      )}
      {menuVisible && <setMenuVisible />}
    </div>

    </header>

    </>




  )
}
export default Header;