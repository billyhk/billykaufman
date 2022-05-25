import React from 'react'
import { ToolsLineItem } from '../../components/molecules'
import { SkillsCard } from '../../components/molecules/Card'
import { skillsData } from './skills'
import { toolsData } from './tools'

import { GoTools } from 'react-icons/go'
import { FaReact } from 'react-icons/fa'

export const aboutPageSections = [
  {
    Icon: <FaReact size={50} fill='#62dafb' className='spin' />,
    heading: 'Skills',
    subheading: 'I do these things quite well',
    body: (
      <div className='skills-cards__container'>
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
    Icon: '',
    heading: 'Happy Customers',
    subheading: "I've done development work for the following companies",
    body: '',
  },
]
