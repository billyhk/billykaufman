import React, { Fragment, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { ArrowNext, ArrowPrev, Indicator, NavToTop } from '../atoms'
import { projectsData } from '../../utils/data/projects'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../styles/pages/projects.css'

const staticCopy = {
  pageHeader: 'My Past Projects',
  subheading:
    "Here are some projects I've worked on as a professional front-end web-dev",
}

const Projects = ({ referenceEl }) => {
  const [currentProjectSelected, setCurrentProjectSelected] = useState(
    Object.keys(projectsData)[0]
  )

  return (
    <Fragment>
      {/* <NavToTop referenceEl={referenceEl} /> */}

      <main className='projects-main'>
        {/* Heading */}
        <div className='projects-header'>
          <h1>{staticCopy.pageHeader}</h1>
          <h4>{staticCopy.subheading}</h4>
        </div>
        {/* PROJECT SELECTOR (dropdown menu) */}

        <div className='projects__data--container'>
          <div className='projects__carousel--container'>
            <Carousel
              infiniteLoop
              stopOnHover
              showArrows
              emulateTouch
              showStatus={false}
              autoPlay
              renderArrowPrev={ArrowPrev}
              renderArrowNext={ArrowNext}
              renderIndicator={Indicator}>
              {projectsData[currentProjectSelected].images.map((image) => (
                <img alt='' src={image} />
              ))}
            </Carousel>
          </div>
          {/* Glassmorphic card */}
          <div className='projects__info-card'>
            <h1>{projectsData[currentProjectSelected].title}</h1>
            <div>
              <h4>Client:</h4>
              <p>{projectsData[currentProjectSelected].client}</p>
            </div>
            <div>
              <h4>Technologies:</h4>
              <div>
                {projectsData[currentProjectSelected].technologies.map(
                  (technology) => (
                    <p>{technology}</p>
                  )
                )}
              </div>
            </div>
            <div>
              <h4>Description:</h4>
              <p>{projectsData[currentProjectSelected].description}</p>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Projects
