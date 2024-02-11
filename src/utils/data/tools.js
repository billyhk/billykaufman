import {
  CodeBranch,
  CodeSlash,
  SystemIcon,
  Tasks,
} from '../../components/atoms/svg'

import React from 'react'

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
    copy: 'Jira, Aha!, Asana, Clickup',
  },
]
