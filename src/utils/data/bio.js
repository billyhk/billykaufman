import React from 'react'

export const bioData = {
  name: 'Billy Kaufman',
  title: 'Front-end web engineer in NYC',
  bodyParagraphs: [
    <p>
      Experienced software developer specializing in front-end development.
      Skilled in TypeScript (React-based frameworks), object-oriented software
      design patterns, Headless CMS, and integrating Application Programming
      Interfaces.
    </p>,
    <p>
      Strong engineering professional with a full-stack engineering certificate
      from renowned accelerated education at{' '}
      <a
        className='g-a-link'
        href='https://generalassemb.ly/education/software-engineering-immersive-remote'
        target='_blank'
        rel='noopener noreferrer'>
        General Assembly
      </a>
      .
    </p>,
    <p>
      My favorite f/e stack: React, Context, Tailwind, Formik, Axios, and
      deployment with Amazon Web Services.
    </p>,
  ],
  CTAs: [
    <a
      className='about__bio-content--button-resume'
      href='https://drive.google.com/file/d/1fvTmpX9EZQhtmOdkbj6wFvb7EFDBw03b/view?usp=sharing'
      target='_blank'
      rel='noopener noreferrer'>
      Download Resume
    </a>,
    <a
      className='about__bio-content--button-email'
      href='mailto:billyhkaufman@gmail.com'>
      Hire Me
    </a>,
  ],
}
