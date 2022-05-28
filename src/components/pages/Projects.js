import React, { Fragment, useState } from 'react'
import { NavToTop } from '../atoms'
import '../../styles/pages/projects.css'

const Projects = ({ referenceEl }) => {
  // const [currentProjectSelected, setCurrentProjectSelected] = useState('')

  return (
    <Fragment>
      <NavToTop referenceEl={referenceEl} />

      <main className='projects-main'></main>
    </Fragment>
  )
}

export default Projects
