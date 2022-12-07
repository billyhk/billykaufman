import React from 'react'
import { Arrow } from './svg'

export default function NavToTop({ referenceEl }) {
  return (
    <div
      className='nav-to-top'
      onClick={() =>
        referenceEl.current?.scrollTo({ top: 0, behavior: 'smooth' })
      }>
      <Arrow />
    </div>
  )
}
