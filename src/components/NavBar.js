import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

const NavBar = () => {
  // STICKY HEADER
  // const debounce = (fn) => {
  // 	let frame;
  // 	return (...params) => {
  // 		if (frame) {
  // 			cancelAnimationFrame(frame);
  // 		}
  // 		frame = requestAnimationFrame(() => {
  // 			fn(...params);
  // 			console.log(...params);
  // 		});
  // 	};
  // };
  
  // const storeScroll = () => {
  // 	document.documentElement.dataset.scroll = window.scrollY;
  // };
  // document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  // storeScroll();
  // END STICKY HEADER

  const [open, setOpen] = useState(false)

  const toggleSide = () => {
    setOpen(!open)
  }

  return (
    <div className='nav-container'>
      <p className='hamburger-icon' onClick={toggleSide}>
        {!open ? '☰' : '×'}
      </p>
      <nav
        className='side-nav'
        id={open ? 'open' : 'closed'}
        onClick={toggleSide}>
        <div className='sidebar-links'>
          <NavLink exact to='/' activeClassName='active'>
            home
          </NavLink>

          <NavLink to='about' activeClassName='active'>
            about
          </NavLink>

          <NavLink to='projects' activeClassName='active'>
            projects
          </NavLink>

          <NavLink to='contact' activeClassName='active'>
            contact
          </NavLink>
        </div>
      </nav>
      <ul className='nav-left'>
        <li>
          <NavLink exact to='/' activeClassName='active'>
            home
          </NavLink>
        </li>
        <li>
          <NavLink to='about' activeClassName='active'>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to='projects' activeClassName='active'>
            projects
          </NavLink>
        </li>
        <li>
          <NavLink to='contact' activeClassName='active'>
            contact
          </NavLink>
        </li>
      </ul>
      <ul className='nav-right'>
        <NavLink to='/'>
          <p className='signature'>Billy Kaufman</p>
        </NavLink>

        <a
          href='https://github.com/billyhk'
          target='_blank'
          rel='noopener noreferrer'>
          <li>
            <FaGithub />
          </li>
        </a>
        <a
          href='https://www.linkedin.com/in/williamhkaufman/'
          target='_blank'
          rel='noopener noreferrer'>
          <li>
            <FaLinkedin />
          </li>
        </a>
        <a href='mailto:billyhkaufman@gmail.com'>
          <li>
            <FaEnvelope />
          </li>
        </a>
      </ul>
    </div>
  )
}

export default NavBar
