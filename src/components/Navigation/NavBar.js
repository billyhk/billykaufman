import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'
import { routes } from '../../utils/routing'
import { XIcon } from './XIcon'
import { HamburgerButton } from './HamburgerButton'
import { useClickOutside } from '../../utils/hooks'
import { Spin as Hamburger } from 'hamburger-react'

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
  const closeNav = () => {
    if (open) setOpen(false)
  }
  const ref = useClickOutside(closeNav)

  const linkElements = routes.map((r) => (
    <NavLink exact to={r.path} activeClassName='active' onClick={closeNav}>
      {r.name}
    </NavLink>
  ))
  return (
    <div className='nav-container'>
      {/* Mobile Nav Header */}
      {/* <span className='menu-toggle-button' onClick={toggleSide}>
        {!open ? <HamburgerButton /> : <XIcon />}
      </span> */}
      <span className='menu-toggle-button'>
        <Hamburger
          toggled={open}
          toggle={toggleSide}
          direction='right'
          color='#fff'
          burgerStyles={{ zIndex: 3 }}
        />
      </span>

      {/* Mobile Nav Menu */}
      <nav className='side-nav' id={open ? 'open' : 'closed'}>
        {/* Mobile Nav Menu */}
        <div className='sidebar-links' ref={ref}>
          {linkElements}
        </div>
      </nav>
      {/* END Mobile Nav */}

      {/* Desktop Nav */}
      <div className='nav-left'>{linkElements}</div>

      <div className='nav-right'>
        {/* Signature in both desktop & mobile nav */}
        <NavLink to='/'>
          <span className='signature'>Billy Kaufman</span>
        </NavLink>

        {navRightIcons.map((el) => (
          <a
            className='nav-right-icon'
            href={el.href}
            target='_blank'
            rel='noopener noreferrer'>
            {el.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavBar
