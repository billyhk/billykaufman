import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { pagePaths } from '../utils/routing'

const linkElements = Object.entries(pagePaths).map(([field, value]) => (
  <NavLink exact to={value} activeClassName='active'>
    {field}
  </NavLink>
))

const navRightIcons = [
  {
    icon: <FaGithub />,
    href: 'https://github.com/billyhk',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/williamhkaufman/',
  },
  {
    icon: <FaEnvelope />,
    href: 'mailto:billyhkaufman@gmail.com',
  },
]

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const toggleSide = () => {
    setOpen(!open)
  }

  return (
    <div className='nav-container'>
      {/* Mobile Nav Header */}
      <p className='hamburger-icon' onClick={toggleSide}>
        {!open ? '☰' : '×'}
      </p>
      <nav
        className='side-nav'
        id={open ? 'open' : 'closed'}
        onClick={toggleSide}>
        {/* Mobile Nav Menu */}
        <div className='sidebar-links'>{linkElements}</div>
      </nav>

      {/* Desktop Nav */}
      <ul className='nav-left'>{linkElements}</ul>

      <div className='nav-right'>
        {/* Signature in both desktop & mobile nav */}
        <NavLink to='/'>
          <p className='signature'>Billy Kaufman</p>
        </NavLink>

        {navRightIcons.map((el) => (
          <li>
            <a href={el.href} target='_blank' rel='noopener noreferrer'>
              {el.icon}
            </a>
          </li>
        ))}
      </div>
    </div>
  )
}

export default NavBar
