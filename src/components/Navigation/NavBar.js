import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { pagePaths, routes } from '../../utils/routing'
import { XIcon } from './XIcon'
import { HamburgerButton } from './HamburgerButton'

const linkElements = routes.map((r) => (
  <NavLink exact to={r.path} activeClassName='active'>
    {r.name}
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
      <span className='menu-toggle-button' onClick={toggleSide}>
        {!open ? <HamburgerButton /> : <XIcon />}
      </span>
      <nav
        className='side-nav'
        id={open ? 'open' : 'closed'}
        onClick={toggleSide}>
        {/* Mobile Nav Menu */}
        <div className='sidebar-links'>{linkElements}</div>
      </nav>

      {/* Desktop Nav */}
      <div className='nav-left'>{linkElements}</div>

      <div className='nav-right'>
        {/* Signature in both desktop & mobile nav */}
        <NavLink to='/'>
          <p className='signature'>Billy Kaufman</p>
        </NavLink>

        {navRightIcons.map((el) => (
          <a className='nav-right-icon' href={el.href} target='_blank' rel='noopener noreferrer'>
            {el.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavBar
