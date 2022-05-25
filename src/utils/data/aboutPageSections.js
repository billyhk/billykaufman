import React, { useState } from 'react'
import { GoTools } from 'react-icons/go'
import { FaReact, FaHandsHelping } from 'react-icons/fa'

import { ToolsLineItem } from '../../components/molecules'
import { SkillsCard } from '../../components/molecules/Card'

import { skillsData } from './skills'
import { toolsData } from './tools'

import '../../styles/components/skills.css'
import '../../styles/components/tools.css'
import '../../styles/components/clients.css'

const clientsData = [
  {
    Logo: 'test',
    title: 'test',
    description: 'test',
  },
  {
    Logo: '',
    title: '',
    description: '',
  },
  {
    Logo: '',
    title: '',
    description: '',
  },
  {
    Logo: '',
    title: '',
    description: '',
  },
]

const ClientCard = ({ Logo, title, description }) => {
  const [showReverse, setShowReverse] = useState(false)

  return <div className='client-card'></div>
}

export const aboutPageSections = [
  {
    Icon: <FaReact size={50} fill='#62dafb' className='spin' />,
    heading: 'Skills',
    subheading: 'I do these things quite well',
    body: (
      <div className='skills__container'>
        {skillsData.map((skill, i) => (
          <SkillsCard {...skill} />
        ))}
      </div>
    ),
  },
  {
    Icon: <GoTools size={50} fill='#555' />,
    heading: 'Tools',
    subheading: 'Instruments of the trade that have made my dev-life easier',
    body: (
      <div className='tools__container'>
        {toolsData.map((tool, i) => (
          <ToolsLineItem {...tool} />
        ))}
      </div>
    ),
  },
  {
    Icon: <FaHandsHelping size={60} fill='url(#handshake-icon-gradient)' />,
    heading: 'Happy Customers',
    subheading: "I've done development work for the following companies",
    body: (
      <div className='clients__container'>
        {/* {

        {clientsData.map((client, i) => (
          <ClientCard {client} />
        )}

      } */}
      </div>
    ),
  },
]
