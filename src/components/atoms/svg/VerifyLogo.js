import React from 'react'

const VerifyLogo = ({ fill = 'url(#verify-logo-gradient)', ...props }) => {
  return (
    <svg
      viewBox='0 0 76.36 66.816'
      fill={fill || 'currentColor'}
      {...props}>
      <path
        d='m361.2-1484.017 13.338-25.009 15.825-29.672h-20.921L334-1471.882h20.722z'
        transform='translate(-313.998 1538.698)'
      />
      <path
        d='m57.641-1074.349-9.6-18.266H27.318l20 37.721'
        transform='translate(-27.318 1121.71)'
        fill='#10312b'
      />
    </svg>
  )
}
export default VerifyLogo
