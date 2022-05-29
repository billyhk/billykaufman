import React from 'react'

const ProjectCard = ({
  project: { title, client, technologies, description },
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
        {technologies.map((technology) => (
          <p>{technology}</p>
        ))}
      </div>
    </div>
    <div>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  </div>
)
export default ProjectCard
