import React from 'react'

const CheckIcon = ({
  size = 20,
  stroke = 'currentColor',
  strokeWidth = '0',
  fill = '#fff',
  ...props
}) => (
  <svg
    stroke={stroke}
    fill={fill}
    strokeWidth={strokeWidth}
    viewBox='0 0 20 20'
    width={size}
    {...props}>
    <path d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'></path>
  </svg>
)
export default CheckIcon
