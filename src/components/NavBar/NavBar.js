import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='nav'>
      <h1 className='nav__title'>CW</h1>
      <ul className='nav__list'>
        <li><Link className='nav__link' to='/'>Welcome</Link></li>
        <li><Link className='nav__link' to='/about'>About</Link></li>
        <li><Link className='nav__link' to='/projects'>Projects</Link></li>
        <li><Link className='nav__link' to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}
