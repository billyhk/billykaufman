import React from 'react'

const Tasks = ({
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
    viewBox='0 0 24 24'
    width={size}
    {...props}>
    <path
      fill='none'
      stroke='#000'
      strokeWidth='2'
      d='M1,3 L23,3 L23,7 L1,7 L1,3 Z M1,10 L23,10 L23,14 L1,14 L1,10 Z M1,17 L23,17 L23,21 L1,21 L1,17 Z M1,4 L16,4 L16,6 L1,6 L1,4 Z M1,11 L6,11 L6,13 L1,13 L1,11 Z M1,18 L11,18 L11,20 L1,20 L1,18 Z'></path>
  </svg>
)
export default Tasks
