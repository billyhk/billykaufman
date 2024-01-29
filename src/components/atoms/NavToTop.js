import { Arrow } from './svg'
import React from 'react'

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
