import React, { Fragment } from 'react'

const ProjectCard = ({
  project: { title, client, technologies, description, deployment, sourceCode },
}) => (
  <div className='projects__info-card'>
    <h1>{title}</h1>
    <div>
      <h4>Client:</h4>
      <p>{client}</p>
    </div>
    <div>
      <h4>Technologies:</h4>
      <div>
        {technologies.map((technology, i) => (
          <p key={i}>{technology}</p>
        ))}
      </div>
    </div>
    <div>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
    {deployment && (
      <a
        className='fancy-link fancy-bg-blue'
        href={deployment}
        target='_blank'
        rel='noopener noreferrer'>
        Deployed URL
      </a>
    )}
    {sourceCode && (
      <a
        className='fancy-link fancy-bg-red'
        href={sourceCode}
        target='_blank'
        rel='noopener noreferrer'>
        Source Code
      </a>
    )}
  </div>
)
export default ProjectCard
