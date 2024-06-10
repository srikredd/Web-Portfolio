import React from 'react';
import './Header.css'; // Import the CSS for this component

function Header() {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;