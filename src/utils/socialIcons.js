import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export const socialIcons = [
  {
    icon: (props) => <FaGithub {...props} />,
    href: 'https://github.com/billyhk',
  },
  {
    icon: (props) => <FaLinkedin {...props} />,
    href: 'https://www.linkedin.com/in/williamhkaufman/',
  },
  {
    icon: (props) => <FaEnvelope {...props} />,
    href: 'mailto:billyhkaufman@gmail.com',
  },
]
