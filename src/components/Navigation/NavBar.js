import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../utils/routing'
import { useClickOutside } from '../../utils/hooks'
import { Spin as Hamburger } from 'hamburger-react'
import { socialIcons } from '../../utils/socialIcons'
import '../../styles/components/navigation.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const toggleSide = () => {
    setOpen(!open)
  }
  const closeNav = () => {
    if (open) setOpen(false)
  }
  const ref = useClickOutside(closeNav)

  const linkElements = routes.map((r, i) => (
    <NavLink
      key={i}
      exact
      to={r.path}
      activeClassName='active'
      onClick={closeNav}>
      {r.name}
    </NavLink>
  ))
  return (
    <div className='nav-container'>
      {/* Mobile Nav Header */}
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

        {socialIcons.map((el, i) => (
          <a
            key={i}
            className='nav-right-icon'
            href={el.href}
            target='_blank'
            rel='noopener noreferrer'>
            {el.icon({ size: 30 })}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavBar
