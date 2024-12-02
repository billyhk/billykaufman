import { Arrow } from './svg'
import React from 'react'
import { useIsScrolledToTop } from '../../utils/hooks'

export default function NavToTop({ referenceEl }) {
  const isScrolledToTop = useIsScrolledToTop(referenceEl)

  if (isScrolledToTop) {
    return null
  }

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
