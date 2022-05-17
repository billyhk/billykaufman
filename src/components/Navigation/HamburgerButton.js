import React from 'react'
import { HamburgerBar } from './HamburgerBar'

export const HamburgerButton = ({ className, ...props }) => {
  return (
    <div className='hamburger-button' {...props}>
      {Array.from({ length: 3 }).map((_, i) => (
        <HamburgerBar key={i} />
      ))}
    </div>
  )
}
