import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <h1 className='nav-title'>CW</h1>
      <ul className='nav-list'>
        <li><Link className='nav-link' to='/'>Welcome</Link></li>
        <li><Link className='nav-link' to='/about'>About</Link></li>
        <li><Link className='nav-link' to='/projects'>Projects</Link></li>
        <li><Link className='nav-link' to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}
