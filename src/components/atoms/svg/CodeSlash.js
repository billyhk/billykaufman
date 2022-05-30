import React from 'react'

const CodeSlash = ({
  size = '100%',
  stroke = 'currentColor',
  strokeWidth = '0',
  fill = '#fff',
  ...props
}) => (
  <svg
    stroke={stroke}
    fill={fill}
    strokeWidth={strokeWidth}
    viewBox='0 0 16 16'
    width={size}
    {...props}>
    <path d='M4.854 4.146a.5.5 0 010 .708L1.707 8l3.147 3.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0zm6.292 0a.5.5 0 000 .708L14.293 8l-3.147 3.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 00-.708 0zm-.999-3.124a.5.5 0 01.33.625l-4 13a.5.5 0 01-.955-.294l4-13a.5.5 0 01.625-.33z'></path>
  </svg>
)
export default CodeSlash
