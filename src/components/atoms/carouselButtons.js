import React from 'react'
import Arrow from './svg/Arrow'

const arrowStyles = {
  position: 'absolute',
  zIndex: 1,
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

const rotate = {
  right: { transform: 'rotate(90deg)' },
  left: { transform: 'rotate(-90deg)' },
}

const indicatorStyles = {
  background: 'rgba(0,0,0,0)',
  border: '1px solid black',
  width: 10,
  height: 10,
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
      style={{ ...arrowStyles, left: 15, ...rotate.left }}>
      <Arrow />
    </button>
  )

export const ArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button
      className='projects__carousel--arrow-button'
      type='button'
      onClick={onClickHandler}
      title={label}
      style={{ ...arrowStyles, right: 15, ...rotate.right }}>
      <Arrow />
    </button>
  )

export const Indicator = (onClickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <li
        style={{ ...indicatorStyles, background: '#DC143C' }}
        // className='projects__carousel--indicator-button'
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    )
  }
  return (
    <li
      style={indicatorStyles}
      // className='projects__carousel--indicator-button'
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
