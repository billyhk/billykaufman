import React from 'react'

const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% - 15px)',
  width: 30,
  height: 30,
  backgroundColor: '#afb5bd',
  fontWeight: 800,
  cursor: 'pointer',
  border: '2px solid black',
  borderRadius: '50%',
  background: 'linear-gradient(145deg, #d6d6d6, #afb5bd)',
}

const indicatorStyles = {
  background: 'rgba(0,0,0,0)',
  border: '2px solid black',
  width: 15,
  height: 15,
  borderRadius: '50%',
  display: 'inline-block',
  margin: '0 8px',
  cursor: 'pointer',
}

export const ArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <button
      className='projects__carousel--arrow-button'
      type='button'
      onClick={onClickHandler}
      title={label}
      style={{ ...arrowStyles, left: 15 }}>
      {'<'}
    </button>
  )

export const ArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button
      className='projects__carousel--arrow-button'
      type='button'
      onClick={onClickHandler}
      title={label}
      style={{ ...arrowStyles, right: 15 }}>
      {'>'}
    </button>
  )

export const Indicator = (onClickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <li
        style={{ ...indicatorStyles, background: '#afb5bd' }}
        className='projects__carousel--indicator-button'
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    )
  }
  return (
    <li
      style={indicatorStyles}
      className='projects__carousel--indicator-button'
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role='button'
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  )
}
