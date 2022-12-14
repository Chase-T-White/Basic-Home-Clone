import React from "react";
import "./nav.css";

const Navbar = () => {
  return (
    <header>
      <nav className='nav'>
        <div className='logo'>
          Basic/Dept<sub>®</sub>
        </div>
        <ul className='nav__links'>
          <li>
            <a href='#'>Work</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Thinking</a>
          </li>
          <li>
            <a href='#'>Pledge</a>
          </li>
          <li>
            <a href='#'>Careers</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='dots'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
