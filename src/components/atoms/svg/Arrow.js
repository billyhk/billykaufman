import React from 'react'

const Arrow = ({
  size = '100%',
  stroke = 'currentColor',
  strokeWidth = '0',
  fill = '#000',
  ...props
}) => (
  <svg
    stroke={stroke}
    fill={fill}
    strokeWidth={strokeWidth}
    viewBox='0 0 24 24'
    width={size}
    {...props}>
    <path d='M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z'></path>
  </svg>
)
export default Arrow
