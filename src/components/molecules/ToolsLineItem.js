import React from 'react'

const ToolsLineItem = ({ Icon, title, copy }) => {
  return (
    <div className='tools__line-item--container'>
      {Icon}
      <p className='tools__card-title'>{title}:</p>
      <p className='tools__card-copy'>{copy}</p>
    </div>
  )
}

export default ToolsLineItem
