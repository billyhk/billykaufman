import React from 'react'

export const XIcon = ({ className, color = '#fff', width = 30, ...props }) => {
  return (
    <svg className={className} width={width} viewBox='0 0 20 20' {...props}>
      <path
        data-name='Rectangle 3236'
        transform='rotate(45 .707 1.707)'
        fill={color}
        d='M0 0h26v2H0z'
      />
      <path
        data-name='Rectangle 3237'
        transform='rotate(-45 22.193 9.193)'
        fill={color}
        d='M0 0h26v2H0z'
      />
    </svg>
  )
}