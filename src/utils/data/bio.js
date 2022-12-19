import React from 'react'
import { REMOTE_ASSETS } from './remoteAssets'

export const bioData = {
  name: 'Billy Kaufman',
  title: 'Front-end web engineer in NYC',
  bodyParagraphs: [
    <p>
      Experienced software engineer specializing in front-end development.
      Skilled in TypeScript (React-based frameworks), object-oriented software
      design patterns, and integrating Application Programming
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
      My favorite f/e stack: React, Tailwind, HeadlessUI, Formik, React Query, React Table, and deployment solutions with Amazon Web Services.
    </p>,
  ],
  CTAs: [
    <a
      className='fancy-link fancy-bg-blue'
      href={REMOTE_ASSETS.resume}
      target='_blank'
      rel='noopener noreferrer'>
      Download Resume
    </a>,
    <a
      className='fancy-link fancy-bg-red'
      href='mailto:billyhkaufman@gmail.com'>
      Hire Me
    </a>,
  ],
}
