import React, { Fragment, useState } from 'react'
import { projectsData } from '../../utils/data/projects'
import { DropdownGlassmorphism } from '../molecules/Input/Dropdown'
import { Carousel } from 'react-responsive-carousel'
import { ArrowNext, ArrowPrev, Indicator, NavToTop } from '../atoms'
import { ProjectCard } from '../molecules/Card'
import { Template } from '../atoms/svg'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/pages/projects.css'

const staticCopy = {
  pageHeader: 'My Past Projects',
  subheading:
    "Here are some projects I've worked on as a professional front-end web-dev",
  disclaimer: (
    <span>
      (Please be aware that many of these projects are still in development with
      code that is <em>proprietary</em>, and therefore{' '}
      <span style={{ fontFamily: 'monospace' }}>CLASSIFIED</span>. However, for
      my non-proprietary words included here, feel free to check out their source
      and/or code staging site.)
    </span>
  ),
}

const carouselProps = {
  infiniteLoop: true,
  stopOnHover: true,
  showArrows: true,
  emulateTouch: true,
  useKeyboardArrows: true,
  autoPlay: true,
  showStatus: false,
  renderArrowPrev: ArrowPrev,
  renderArrowNext: ArrowNext,
  renderIndicator: Indicator,
}

const Projects = ({ referenceEl }) => {
  const [currentProjectSelected, setCurrentProjectSelected] = useState(
    Object.keys(projectsData)[0]
  )

  return (
    <Fragment>
      {/* <NavToTop referenceEl={referenceEl} /> */}

      <main className='projects-main'>
        <div className='projects-header'>
          <Template
            width={100}
            color='rgba(93, 0, 137, 1)'
            style={{ transform: 'rotate(25deg)' }}
          />
          <h1>{staticCopy.pageHeader}</h1>
          <h4>{staticCopy.subheading}</h4>
          {/* <p style={{width: '50%'}}>{staticCopy.disclaimer}</p> */}
        </div>

        <div className='project-selector__container ease-in'>
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
            <Carousel {...carouselProps}>
              {projectsData[currentProjectSelected].images.map((image) => (
                <img alt='' src={image} />
              ))}
            </Carousel>
          </div>
          <ProjectCard project={projectsData[currentProjectSelected]} />
        </div>
      </main>
    </Fragment>
  )
}

export default Projects
