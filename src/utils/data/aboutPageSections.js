import '../../styles/components/skills.css'
import '../../styles/components/tools.css'
import '../../styles/components/clients.css'

import { ClientCard, SkillsCard } from '../../components/molecules/Card'
import { HandsHelping, ReactLogo, Tools } from '../../components/atoms/svg'
import React, { useState } from 'react'

import { ToolsLineItem } from '../../components/molecules'
import { clientsData } from './clients'
import { skillsData } from './skills'
import { toolsData } from './tools'

const ClientCardSection = () => {
  const [showReverse, setShowReverse] = useState(undefined)

  return (
    <div className='clients__container'>
      {clientsData.map((client, i) => (
        <ClientCard
          key={i}
          showReverse={showReverse}
          setShowReverse={setShowReverse}
          index={i}
          {...client}
        />
      ))}
    </div>
  )
}

export const aboutPageSections = [
  {
    Icon: <ReactLogo size={50} fill='#62dafb' className='spin' />,
    heading: 'Skills',
    subheading: 'I do these things quite well',
    body: (
      <div className='skills__container'>
        {skillsData.map((skill, i) => (
          <SkillsCard key={i} {...skill} />
        ))}
      </div>
    ),
  },
  {
    Icon: <Tools width={50} />,
    heading: 'Tools',
    subheading: 'Instruments of the trade that have made my dev-life easier',
    body: (
      <div className='tools__container'>
        {toolsData.map((tool, i) => (
          <ToolsLineItem key={i} {...tool} />
        ))}
      </div>
    ),
  },
  {
    Icon: (
      <HandsHelping
        width={60}
        fill='url(#handshake-icon-gradient)'
        className='pulse'
      />
    ),
    heading: 'Happy Customers',
    subheading: (
      <span>
        I've done development work for the following companies <br />{' '}
        <span style={{ color: '#ccc' }}>(click each to learn more)</span>
      </span>
    ),
    body: <ClientCardSection />,
  },
]
