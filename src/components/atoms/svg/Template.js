import React from 'react'

const Template = ({ width = 24, color = '#000', ...props }) => (
  <svg width={width} viewBox='0 0 24 24' fill='none' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 3V9H21V3H3ZM19 5H5V7H19V5Z'
      fill={color}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 11V21H11V11H3ZM9 13H5V19H9V13Z'
      fill={color}
    />
    <path d='M21 11H13V13H21V11Z' fill={color} />
    <path d='M13 15H21V17H13V15Z' fill={color} />
    <path d='M21 19H13V21H21V19Z' fill={color} />
  </svg>
)
export default Template
