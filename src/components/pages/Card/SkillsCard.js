import React from 'react'

const SkillsCard = ({ Logo, heading, bodyList }) => {
  return (
    <div className='skills-card'>
      <div>{Logo}</div>
      <h2 className='skills-card__heading'>{heading}</h2>
      <div className='skills-card__body-list'>
        {bodyList.map((listEl) => (
          <p>{listEl}</p>
        ))}
      </div>
    </div>
  )
}

export default SkillsCard
