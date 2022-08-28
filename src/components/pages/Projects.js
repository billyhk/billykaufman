import React, { Fragment, useState } from 'react'
import { projectsData } from '../../utils/data/projects'
import { DropdownGlassmorphism } from '../molecules/Input/Dropdown'
import { NavToTop } from '../atoms'
import { ProjectCard, CarouselCard } from '../molecules/Card'
import { Template } from '../atoms/svg'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/pages/projects.css'

const staticCopy = {
  pageHeader: 'My Recent Projects',
  subheading:
    "Here are some projects I've worked on as a professional front-end web-dev",
  // disclaimer: (
  //   <span className='projects-disclaimer'>
  //    [NOTE: Please be aware that some of these projects are still in development with
  //     code that is <em>proprietary</em>, and therefore{' '}
  //     <span style={{ fontFamily: 'monospace' }}>CLASSIFIED</span>. However, for
  //     the other works included here, feel free to check out their
  //     source code and/or staging deployment.]
  //   </span>
  // ),
}

const Projects = ({ referenceEl }) => {
  const [currentProjectSelected, setCurrentProjectSelected] = useState(
    Object.keys(projectsData)[0]
  )

  return (
    <Fragment>
      <NavToTop referenceEl={referenceEl} />

      <main className='projects-main'>
        <div className='projects-header'>
          <Template
            width={100}
            color='rgb(93, 0, 137)'
            className='animate-rotate-90-25'
            style={{ transform: 'rotate(25deg)' }}
          />
          <h1>{staticCopy.pageHeader}</h1>
          <h4>{staticCopy.subheading}</h4>
          <p>{staticCopy.disclaimer}</p>
        </div>

        <div className='project-selector__container animate-fade-in-rise'>
          <h1>Select a Project:</h1>
          <DropdownGlassmorphism
            value={currentProjectSelected}
            setValue={setCurrentProjectSelected}
            options={Object.entries(projectsData)}
            buttonValue={projectsData[currentProjectSelected].title}
            valueAccessor={'title'}
          />
        </div>

        <div className='projects__data--container'>
          <div className='projects__carousel--container'>
            <CarouselCard
              images={projectsData[currentProjectSelected].images}
            />
          </div>
          <ProjectCard project={projectsData[currentProjectSelected]} />
        </div>
      </main>
    </Fragment>
  )
}

export default Projects
