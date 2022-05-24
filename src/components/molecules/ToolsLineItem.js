import React from 'react'

const ToolsLineItem = ({ Icon, title, copy }) => {
  return (
    <div className='tools__line-item--container'>
      <div className='tools__tool-label'>
        {Icon} <h2>{title}:</h2>
      </div>
      <h3 className='tools__card-copy'>{copy}</h3>
    </div>
  )
}

export default ToolsLineItem
