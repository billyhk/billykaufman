import React from 'react'

export const HamburgerBar = ({ width = 30, color = '#fff', ...props }) => {
  return (
    <svg width={width} viewBox='0 0 25 2' {...props}>
      <path fill={color} d='M0 0h26v2H0z' />
    </svg>
  )
}
