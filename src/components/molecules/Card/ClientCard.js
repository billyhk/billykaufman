import React from 'react'
import cn from 'classnames'

const ClientCard = ({
  Logo,
  title,
  description,
  showReverse,
  setShowReverse,
  index,
}) => {
  const toggleShowReverse = () =>
    setShowReverse(isCardReversed ? undefined : index)
  const isCardReversed = index === showReverse

  return (
    <div
      onClick={toggleShowReverse}
      className={cn(
        'client-card',
        isCardReversed && 'client-card__shadow-down',
        !isCardReversed && 'client-card__shadow-up'
      )}>
      {isCardReversed ? (
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
