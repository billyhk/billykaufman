import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/pages/projects.css'

import { CarouselCard, ProjectCard } from '../molecules/Card'
import React, { Fragment, useState } from 'react'

import { DropdownGlassmorphism } from '../molecules/Input/Dropdown'
import Loader from '../molecules/Loader'
import { NavToTop } from '../atoms'
import { Template } from '../atoms/svg'
import { projectsData } from '../../utils/data/projects'
import { useAssetLoader } from '../../utils/hooks/useAssetLoader'

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
  const defaultProjectSelected = Object.keys(projectsData)[0]

  const [currentProjectSelected, setCurrentProjectSelected] = useState(
    defaultProjectSelected
  )

  const showLoader = useAssetLoader(projectsData[defaultProjectSelected].images)

  if (showLoader) {
    return <Loader />
  }

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
