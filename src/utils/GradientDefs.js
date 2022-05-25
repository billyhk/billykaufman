import React from 'react'

const GradientDefs = () => (
  <svg style={{ width: 0, height: 0 }}>
    <defs>
      <linearGradient
        id='verify-logo-gradient'
        x1='11.551'
        y1='.973'
        x2='11.551'
        y2='-.085'
        gradientUnits='objectBoundingBox'>
        <stop offset='.048' stopColor='#efea5a' />
        <stop offset='.399' stopColor='#00da9d' />
        <stop offset='.836' stopColor='#10312b' />
      </linearGradient>

      <linearGradient
        id='verify-gradient'
        x1='.5'
        x2='.5'
        y2='1'
        gradientUnits='objectBoundingBox'>
        <stop offset='0' stopColor='#efea5a' />
        <stop offset='.5' stopColor='#91e474' />
        <stop offset='1' stopColor='#00da9d' />
      </linearGradient>

      <linearGradient
        id='handshake-icon-gradient'
        x1='100%'
        y1='100%'
        x2='0%'
        y2='0%'>
        <stop stopColor='#7bf1a8' offset='0%' />
        <stop stopColor='#9ef6a6' offset='50%' />
        <stop stopColor='#c1fba4' offset='100%' />
      </linearGradient>
    </defs>
  </svg>
)

export default GradientDefs
