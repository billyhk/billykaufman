import React from 'react'

export default function NavToTop({ referenceEl }) {
  return (
    <div
      className='nav-to-top'
      onClick={() => referenceEl.current?.scrollTo({ top: 0 })}>
      <span>^</span>
    </div>
  )
}
