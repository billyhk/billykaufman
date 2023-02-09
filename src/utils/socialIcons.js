import React from 'react'
import { GithubIcon, LinkedInIcon, Envelope } from '../components/atoms/svg'

export const socialIcons = [
  {
    icon: (props) => <GithubIcon {...props} />,
    // href: 'https://github.com/billyhk/billykaufman',
    href: 'https://github.com/billyhk',
    displayName: 'github.com/billyhk',
  },
  {
    icon: (props) => <LinkedInIcon {...props} />,
    href: 'https://www.linkedin.com/in/billykaufman/',
    displayName: '/in/billykaufman',
  },
  {
    icon: (props) => <Envelope {...props} />,
    href: 'mailto:billyhkaufman@gmail.com',
    displayName: 'billyhkaufman@gmail.com',
  },
]
