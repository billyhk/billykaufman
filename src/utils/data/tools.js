import React from 'react'

import { GrSystem, GrTasks } from 'react-icons/gr'
import { BsCodeSlash } from 'react-icons/bs'
import { FaCodeBranch } from 'react-icons/fa'
import { CodeSlash, SystemIcon, CodeBranch, Tasks } from '../../components/atoms/svg'

export const toolsData = [
  {
    Icon: <SystemIcon width={25} />,
    title: 'Operating System',
    copy: 'MacOS',
  },
  {
    Icon: <CodeSlash width={25} />,
    title: 'IDE',
    copy: 'Visual Studio Code',
  },
  {
    Icon: <CodeBranch width={20} />,
    title: 'Version Control System',
    copy: 'Git, Github, Gitlab, Bitbucket',
  },
  {
    Icon: <Tasks width={25} />,
    title: 'Project Management Software',
    copy: 'Aha!, Asana, Clickup, Gitlab',
  },
]
