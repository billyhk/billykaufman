import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import collective1 from '../../component-images/project-images/collective/01 login.png'
import collective2 from '../../component-images/project-images/collective/02a dashboard.png'
import collective3 from '../../component-images/project-images/collective/02b company-details.png'
import collective4 from '../../component-images/project-images/collective/3 users can have vendors that receive orders, or only use the platform to place orders -- filtered-vendors-list.png'
import collective5 from '../../component-images/project-images/collective/04a create requisition for placing orders with other vendors.png'
import collective6 from '../../component-images/project-images/collective/04b requisitions are broken down into orders.png'
import collective7 from '../../component-images/project-images/collective/04c order-details.png'
import collective8 from '../../component-images/project-images/collective/04d send message to selected vendors on an order.png'

import '../../styles/pages/projects.css'

const projectsData = {
  // sebpo: {
  //   title: '',
  //   client: '',
  //   technologies: [''],
  //   description: '',
  //   images: [''],
  // },
  the_collective: {
    title: 'The Collective',
    client: 'G&G Holdings',
    technologies: [
      'ReactJS',
      'ContextAPI',
      'TailwindCSS',
      'Formik/Yup',
      'React-Table',
    ],
    description:
      'This web application served as a purchasing agent for the construction industry. The platform can be used to create vendors that can receive orders, or to only place orders to vendors created by other users.',
    images: [
      collective1,
      collective2,
      collective3,
      collective4,
      collective5,
      collective6,
      collective7,
      collective8,
    ],
  },
}

const Projects = () => {
  const [currentProjectSelected, setCurrentProjectSelected] =
    useState('the_collective')

  return (
    <main className='projects-main'>
      {/* Heading */}

      <div className='projects-header'>
        <h1>My Past Projects</h1>
        <h4>
          Here are some projects I've worked on as a professional front-end
          web-dev
        </h4>
      </div>

      {/* PROJECT SELECTOR (dropdown menu) */}

      <div className='projects__data--container'>
        <div className='projects__carousel--container'>
          <Carousel showArrows emulateTouch showStatus={false} autoPlay>
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
  )
}

export default Projects
