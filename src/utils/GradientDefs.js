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

      <linearGradient
        id='sebpo-gradient1'
        gradientUnits='userSpaceOnUse'
        x1={41.541}
        y1={106.234}
        x2={41.541}
        y2={19.761}>
        <stop offset={0} stopColor='#bf6728' />
        <stop offset={0.196} stopColor='#d07f2b' />
        <stop offset={0.544} stopColor='#e9a531' />
        <stop offset={0.825} stopColor='#f9bc34' />
        <stop offset={1} stopColor='#ffc535' />
      </linearGradient>

      <linearGradient
        id='sebpo-gradient2'
        gradientUnits='userSpaceOnUse'
        x1={65.866}
        y1={92.236}
        x2={65.866}
        y2={19.579}>
        <stop offset={0} stopColor='#bf6728' />
        <stop offset={0.196} stopColor='#d07f2b' />
        <stop offset={0.544} stopColor='#e9a531' />
        <stop offset={0.825} stopColor='#f9bc34' />
        <stop offset={1} stopColor='#ffc535' />
      </linearGradient>

      <linearGradient
        id='crs-gradient'
        x1='48.0348'
        y1='-2.22119'
        x2='-16.5112'
        y2='52.1646'
        gradientUnits='userSpaceOnUse'>
        <stop stopColor='#F1955E' />
        <stop offset='1' stopColor='#FFC047' />
      </linearGradient>
    </defs>
  </svg>
)

export default GradientDefs
