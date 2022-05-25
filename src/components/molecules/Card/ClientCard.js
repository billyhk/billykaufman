import React, { useState } from 'react'
import cn from 'classnames'

const ClientCard = ({ Logo, title, description }) => {
  const [showReverse, setShowReverse] = useState(false)
  const toggleShowReverse = () => setShowReverse(!showReverse)

  return (
    <div
      onClick={toggleShowReverse}
      className={cn(
        'client-card',
        showReverse && 'client-card__shadow-down',
        !showReverse && 'client-card__shadow-up'
      )}>
      {showReverse ? (
        <div className='client-card__reverse-content-container'>
          <p className='client-card__reverse--title'>{title}</p>
          <p className='client-card__reverse--body'>{description}</p>
        </div>
      ) : (
        Logo
      )}
    </div>
  )
}
export default ClientCard
