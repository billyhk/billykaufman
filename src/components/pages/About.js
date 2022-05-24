import React, { Fragment } from 'react'
import { NavToTop } from '../atoms'
import { SkillsCard } from './Card'
import { bioData } from '../../utils/data/bio'
import { skillsData } from '../../utils/data/skills'
import headshot from '../../component-images/picture-of-self.png'
import '../../styles/pages/about.css'
import '../../styles/components/skills.css'

const About = ({ referenceEl }) => {
  return (
    <Fragment>
      <NavToTop referenceEl={referenceEl} />
      <main className='about-main'>
        <section className='about-section'>
          <div className='about-header'>
            <h1>About Me</h1>
            <h4>Allow me to introduce myself...</h4>
          </div>
          <div className='about__content-container about-section__animated-content'>
            <div className='about__content-text'>
              <div className='about__content-text--header'>
                <p className='about__content-text--header-name'>
                  {bioData.name}
                </p>
                <p className='about__content-text--header-title'>
                  {bioData.title}
                </p>
              </div>
              {bioData.bodyParagraphs.map((el) => el)}
              <div className='about__content--buttons-container'>
                {bioData.CTAs.map((el) => el)}
              </div>
            </div>
            <img
              alt='headshot of self'
              src={headshot}
              className='about__content-headshot'
            />
          </div>
        </section>

        <section className='about-section'>
          <div className='about-header about__secondary-header'>
            <h1>Skills</h1>
            <h4>I do these things quite well</h4>
          </div>
          <div className='skills-cards__container about-section__animated-content'>
            {skillsData.map((skill, i) => (
              <SkillsCard {...skill} />
            ))}
          </div>
        </section>

        {/* Tools: Tools of the trade that have made my dev-life easier */}

        {/* Past Clients: "I've done work for the following companies" */}
      </main>
    </Fragment>
  )
}

export default About