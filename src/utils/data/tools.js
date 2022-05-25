import React from 'react'

import { GrSystem, GrTasks } from 'react-icons/gr'
import { BsCodeSlash } from 'react-icons/bs'
import { FaCodeBranch } from 'react-icons/fa'

export const toolsData = [
  {
    Icon: <GrSystem size={25} />,
    title: 'Operating System',
    copy: 'MacOS, Windows',
  },
  {
    Icon: <BsCodeSlash size={25} />,
    title: 'IDE',
    copy: 'Visual Studio Code, Atom, Sublime',
  },
  {
    Icon: <FaCodeBranch size={25} />,
    title: 'Version Control System',
    copy: 'Git, Github, Gitlab, Bitbucket',
  },
  {
    Icon: <GrTasks size={25} />,
    title: 'Project Management Software',
    copy: 'Aha!, Asana, Clickup, Gitlab',
  },
]
