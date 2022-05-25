import React from 'react'

const Ellipses = ({ width, ...props }) => (
  <svg viewBox='0 0 24 24' width={width} {...props}>
    <path fill='none' d='M0 0h24v24H0z'></path>
    <path
      fill='#fff'
      d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'></path>
  </svg>
)
export default Ellipses
