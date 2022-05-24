import React, { Fragment } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { NavToTop } from '../atoms'
import headshot from '../../component-images/picture-of-self.png'
import '../../styles/pages/about.css'

const bioParagraphs = [
  <p>
    Experienced software developer specializing in front-end development.
    Skilled in TypeScript (React-based frameworks), component-oriented
    architecture, Headless CMS, and integrating Application Programming
    Interfaces.
  </p>,
  <p>
    Strong engineering professional with a full-stack engineering certificate
    from renowned accelerated education at{' '}
    <a
      id='g-a-link'
      href='https://generalassemb.ly/education/software-engineering-immersive-remote'
      target='_blank'
      rel='noopener noreferrer'>
      General Assembly
    </a>
  </p>,
  '',
]

const About = ({ referenceEl }) => {
  return (
    <Fragment>
      <NavToTop referenceEl={referenceEl} />
      <main className='about-main-1'>
        <div className='about-header'>
          <h1>About Me</h1>
          <h4>Allow me to introduce myself...</h4>
        </div>
        <div className='about__content-container'>
          <div className='about__content-text'>
            <div className='about__content-text--header'>
              <p className='about__content-text--header-name'>Billy Kaufman</p>
              <p className='about__content-text--header-title'>
                Front-end web engineer in NYC
              </p>
            </div>
            {bioParagraphs.map((el) => el)}
          </div>
          <img
            alt='headshot of self'
            src={headshot}
            className='about__content-headshot'
          />
        </div>
      </main>
      <main className='about-main-2'>Skills &amp; Tools</main>
      <main className='about-main-3'>Clients</main>
    </Fragment>
  )
}

export default About

{
  /* <main className='about-main'>
        <h1 className='about-heading'>About Me</h1>
        <section className='about-caption-container'>
          <p className='about-caption'>
            Hi, my name is Billy. I create stylish, modern, functional websites
            to serve any purpose for your business. I am committed to holding my
            work to a high standard, from total design to the finest details.
          </p>
          <p className='about-caption'>
            I studied software engineering at{' '}
            <a
              className='g-a-link'
              href='https://generalassemb.ly/'
              target='_blank'
              rel='noopener noreferrer'>
              General Assembly
            </a>
            , and have a background in music with international performance
            experience and a{' '}
            <a
              className='doctorate'
              href='https://scholarship.miami.edu/esploro/outputs/doctoral/Utilizing-Select-Project-Management-Techniques-to-Excel-in-Professional-Percussion-Auditions/991031524184102976'
              target='_blank'
              rel='noopener noreferrer'>
              doctorate
            </a>
            ! As an orchestral percussionist, I have enjoyed the creative
            process of mastering a skill. I hold the same ambition as a
            programmer.
          </p>
          <h2 className='about-heading2'>Skills</h2>
          <ul className='skills-list'>
            <li>JavaScript/TypeScript</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>Next</li>
            <li>Redux &amp; ContextAPI</li>
            <li>HTML &amp; CSS/SCSS</li>
            <li>Headless CMS</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>MongoDB</li>
            <li>Git/Github</li>
            <li>Google Analytics</li>
            <li>Google Tag Manager</li>
            <li>Amazon Web Services</li>
          </ul>
          <h2 className='about-heading2'>Download My Resume</h2>
          <a
            className='resume-link'
            href='https://drive.google.com/file/d/1Ndt9q3jqmwThDpH3oa5DA4WHD20sUdYA/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'>
            <FaFilePdf />
          </a>
        </section>
      </main> */
}
